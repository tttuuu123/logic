/* 
  给定两个字符串 s 和 p，找到 s 中所有 p 的 变位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

  变位词 指字母相同，但排列不同的字符串。

  示例 1：

  输入: s = "cbaebabacd", p = "abc"
  输出: [0,6]
  解释:
  起始索引等于 0 的子串是 "cba", 它是 "abc" 的变位词。
  起始索引等于 6 的子串是 "bac", 它是 "abc" 的变位词。
   示例 2：

  输入: s = "abab", p = "ab"
  输出: [0,1,2]
  解释:
  起始索引等于 0 的子串是 "ab", 它是 "ab" 的变位词。
  起始索引等于 1 的子串是 "ba", 它是 "ab" 的变位词。
  起始索引等于 2 的子串是 "ab", 它是 "ab" 的变位词。
   

  提示:

  1 <= s.length, p.length <= 3 * 104
  s 和 p 仅包含小写字母


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/VabMRr
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  if (s.length < p.length) return [];
  let arr = Array(26).fill(0);
  for (const char of p) {
    arr[char.charCodeAt() - 'a'.charCodeAt()] += 1;
  }
  const FLAG = arr.join('');
  arr = Array(26).fill(0);
  const ret = [];
  for (let l = 0, r = 0; r < s.length; r += 1) {
    arr[s[r].charCodeAt() - 'a'.charCodeAt()] += 1;
    if (r - l + 1 < p.length) continue;
    if (arr.join('') === FLAG) {
      ret.push(l);
    }
    arr[s[l].charCodeAt() - 'a'.charCodeAt()] -= 1;
    l += 1;
  }
  return ret;
};