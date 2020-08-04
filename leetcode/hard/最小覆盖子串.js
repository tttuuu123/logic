/* 
  给你一个字符串 S、一个字符串 T 。请你设计一种算法，可以在 O(n) 的时间复杂度内，从字符串 S 里面找出：包含 T 所有字符的最小子串。

  示例：

  输入：S = "ADOBECODEBANC", T = "ABC"
  输出："BANC"
   

  提示：

  如果 S 中不存这样的子串，则返回空字符串 ""。
  如果 S 中存在这样的子串，我们保证它是唯一的答案。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/minimum-window-substring
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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