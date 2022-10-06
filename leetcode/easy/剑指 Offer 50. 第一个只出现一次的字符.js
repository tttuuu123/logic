/* 
  在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

  示例 1:

  输入：s = "abaccdeff"
  输出：'b'
  示例 2:

  输入：s = "" 
  输出：' '

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  const arr = Array(26).fill(0);
  const F = 'a'.charCodeAt();
  for (const char of s) {
    arr[char.charCodeAt() - F] += 1;
  }
  for (const char of s) {
    if (arr[char.charCodeAt() - F] === 1) return char;
  }
  return ' ';
};