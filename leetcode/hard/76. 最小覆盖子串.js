/* 
  给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

  注意：

  对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
  如果 s 中存在这样的子串，我们保证它是唯一的答案。
   

  示例 1：

  输入：s = "ADOBECODEBANC", t = "ABC"
  输出："BANC"
  示例 2：

  输入：s = "a", t = "a"
  输出："a"
  示例 3:

  输入: s = "a", t = "aa"
  输出: ""
  解释: t 中两个字符 'a' 均应包含在 s 的子串中，
  因此没有符合条件的子字符串，返回空字符串。
   

  提示：

  1 <= s.length, t.length <= 105
  s 和 t 由英文字母组成

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/minimum-window-substring
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

  进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
  let minLen = s.length;
  if (minLen < t.length) return '';
  let resLeft = 0;
  let map = {};
  let missingType = 0;
  let flag = false;
  for (const letter of t) {
    if (!map[letter]) {
      missingType += 1;
      map[letter] = 1;
    } else {
      map[letter] += 1;
    }
  }
  for (let left = 0, right = 0; right < s.length; right += 1) {
    let rightLetter = s[right];
    if (map[rightLetter] !== undefined) map[rightLetter] -= 1;
    if (map[rightLetter] === 0) missingType -= 1;
    while (missingType === 0) {
      flag = true;
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        resLeft = left;
      }
      let leftLetter = s[left];
      if (map[leftLetter] !== undefined) map[leftLetter] += 1;
      if (map[leftLetter] > 0) missingType += 1;
      left += 1;
    }
  }
  return flag ? s.substring(resLeft, resLeft + minLen) : '';
};

/**
 * 要注意只有当missingType在循环过程中变成过0，才代表找到过，所以专门用一个flag来记录是否存在这样的最小字串，如果不存在，就直接返回''
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const map = new Map();
  for (let i = 0; i < t.length; i += 1) {
    map.set(t[i], (map.get(t[i]) || 0) + 1);
  }
  let flag = map.size;
  let ret = '';
  for (let i = 0, j = 0; i < s.length; i += 1) {
    if (map.has(s[i])) {
      const n = map.get(s[i]) - 1;
      map.set(s[i], n);
      if (n === 0) flag -= 1;
      while (flag === 0) {
        const temp = s.substring(j, i + 1);
        if (ret === '' || ret.length > temp.length) {
          ret = temp;
        }
        if (map.has(s[j])) {
          if (map.get(s[j]) === 0) flag += 1;
          map.set(s[j], map.get(s[j]) + 1);
        }
        j += 1;
      }
    }
  }
  return ret;
};

/**
 * O(n)的时间复杂度
 * 滑动窗口一般时间复杂度是O(2n)，也就是O(n)，考虑用滑动窗口
 */