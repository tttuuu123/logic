/* 
  给定两个字符串 s 和 t 。返回 s 中包含 t 的所有字符的最短子字符串。如果 s 中不存在符合条件的子字符串，则返回空字符串 "" 。

  如果 s 中存在多个符合条件的子字符串，返回任意一个。


  注意： 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。

   

  示例 1：

  输入：s = "ADOBECODEBANC", t = "ABC"
  输出："BANC" 
  解释：最短子字符串 "BANC" 包含了字符串 t 的所有字符 'A'、'B'、'C'
  示例 2：

  输入：s = "a", t = "a"
  输出："a"
  示例 3：

  输入：s = "a", t = "aa"
  输出：""
  解释：t 中两个字符 'a' 均应包含在 s 的子串中，因此没有符合条件的子字符串，返回空字符串。
   

  提示：

  1 <= s.length, t.length <= 105
  s 和 t 由英文字母组成
   

  进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/M1oyTv
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (s.length < t.length) return '';
  const map = new Map();
  for (const char of t) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }
  let diff = t.length;
  let L = 0, R = s.length - 1;
  let hasRet = false;
  for (let l = 0, r = 0; r < s.length; r += 1) {
    if (map.has(s[r])) {
      const num = map.get(s[r]);
      if (num > 0) {
        diff -= 1;
      }
      map.set(s[r], num - 1);
    }
    while (diff === 0) {
      hasRet = true;
      if (R - L > r - l) {
        R = r;
        L = l;
      }
      if (map.has(s[l])) {
        const num = map.get(s[l]);
        if (num === 0) {
          diff += 1;
        }
        map.set(s[l], num + 1);
      }
      l += 1;
    }
  }
  return hasRet ? s.substring(L, R + 1) : '';
};

/**
 * 用 哈希表， key为char，val为char出现次数
 * diff记录是否满足t中字母都出现
 * 滑动窗口在O(n)的时间复杂度内就可以解决问题
 * 为何需要hasRet这个辅助变量呢：
 * 因为存在 minWindow('a', 'b')这种场景，若没有额外变量，结果会是'a'
 */