/* 
  给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

  一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

  例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
  两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

  示例 1：

  输入：text1 = "abcde", text2 = "ace" 
  输出：3  
  解释：最长公共子序列是 "ace" ，它的长度为 3 。
  示例 2：

  输入：text1 = "abc", text2 = "abc"
  输出：3
  解释：最长公共子序列是 "abc" ，它的长度为 3 。
  示例 3：

  输入：text1 = "abc", text2 = "def"
  输出：0
  解释：两个字符串没有公共子序列，返回 0 。
   

  提示：

  1 <= text1.length, text2.length <= 1000
  text1 和 text2 仅由小写英文字符组成。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/longest-common-subsequence
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  const len1 = text1.length;
  const len2 = text2.length;
  const dp = Array(len1 + 1).fill(0).map(() => Array(len2 + 1).fill(0));
  for (let i = 1; i <= len1; i += 1) {
    for (let j = 1; j <= len2; j += 1) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1);
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[len1][len2];
};

/**
 * dp[i][j] 表示在 text1前i个字符 和 text2前j个字符 的 最大公共子序列长度
 * 一般场景下
 * dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
 * 若 text1[i - 1] === text2[j - 1]
 * dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1)
 */

