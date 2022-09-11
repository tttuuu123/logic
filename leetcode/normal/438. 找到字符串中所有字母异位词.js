/* 
  给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

  异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

  示例 1:

  输入: s = "cbaebabacd", p = "abc"
  输出: [0,6]
  解释:
  起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
  起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
  示例 2:

  输入: s = "abab", p = "ab"
  输出: [0,1,2]
  解释:
  起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
  起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
  起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。

  提示:

  1 <= s.length, p.length <= 3 * 104
  s 和 p 仅包含小写字母

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/find-all-anagrams-in-a-string
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const ACode = 'a'.charCodeAt();
  let arr = Array(26).fill(0);
  for (const char of p) {
    arr[char.charCodeAt() - ACode] += 1;
  }
  const FLAG = arr.join('');
  const ret = [];
  arr = Array(26).fill(0);
  for (let i = 0, j = 0; i < s.length; i += 1) {
    arr[s[i].charCodeAt() - ACode] += 1;
    if (i - j + 1 < p.length) continue;
    if (i - j + 1 === p.length && arr.join('') === FLAG) {
      ret.push(j);
    }
    arr[s[j].charCodeAt() - ACode] -= 1;
    j += 1;
  }
  return ret;
};
