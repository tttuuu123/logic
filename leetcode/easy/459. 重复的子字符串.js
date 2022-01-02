/* 
  给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。

  示例 1:

  输入: "abab"

  输出: True

  解释: 可由子字符串 "ab" 重复两次构成。
  示例 2:

  输入: "aba"

  输出: False
  示例 3:

  输入: "abcabcabcabc"

  输出: True

  解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/repeated-substring-pattern
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  const str = s + s;
  return str.substr(1, str.length - 2).indexOf(s) !== -1;
};

/**
 * KPM
 */
var repeatedSubstringPattern = function(s) {
  const len = s.length;
  const next = [-1];
  for (let i = 1, j = -1; i < len; i += 1) {
    while (j !== -1 && s[j + 1] !== s[i]) j = next[j];
    if (s[j + 1] === s[i]) j += 1;
    next[i] = j;
  }
  return (next[len - 1] !== -1) && (len % (len - (next[len - 1] + 1)) === 0)
};

/**
 * next[len - 1] !== -1： s中最后一个字母重复出现
 * len - (next[len - 1] + 1)：重复子串长度
 * len % (len - (next[len - 1] + 1)) === 0：s的长度可以整除重复子串长度
 */

