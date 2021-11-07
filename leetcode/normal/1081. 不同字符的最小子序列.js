/* 
  返回 s 字典序最小的子序列，该子序列包含 s 的所有不同字符，且只包含一次。

  注意：该题与 316 https://leetcode.com/problems/remove-duplicate-letters/ 相同

  示例 1：

  输入：s = "bcabc"
  输出："abc"
  示例 2：

  输入：s = "cbacdcbc"
  输出："acdb"
   
  提示：

  1 <= s.length <= 1000
  s 由小写英文字母组成


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
  const stack = [];
  const count = {};
  const hasUse = {};
  for (const char of s) {
    if (!count[char]) count[char] = 0;
    count[char] += 1;
  }
  for (const char of s) {
    while (stack.length && !hasUse[char] && count[stack[stack.length - 1]] > 0 && stack[stack.length - 1] > char) {
      hasUse[stack.pop()] = false;
    }
    if (!hasUse[char]) {
      stack.push(char);
      hasUse[char] = true;
    }
    count[char] -= 1;
  }
  return stack.join('');
};