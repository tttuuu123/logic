/* 
  给定两个单词 word1 和 word2 ，返回使得 word1 和  word2 相同所需的最小步数。

  每步 可以删除任意一个字符串中的一个字符。

  示例 1：

  输入: word1 = "sea", word2 = "eat"
  输出: 2
  解释: 第一步将 "sea" 变为 "ea" ，第二步将 "eat "变为 "ea"
  示例  2:

  输入：word1 = "leetcode", word2 = "etco"
  输出：4
   

  提示：

  1 <= word1.length, word2.length <= 500
  word1 和 word2 只包含小写英文字母

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/delete-operation-for-two-strings
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const len1 = word1.length;
  const len2 = word2.length;
  const dp = Array(len1 + 1).fill(0).map(() => Array(len2 + 1).fill(0));
  for (let i = 1; i <= len1; i += 1) {
    for (let j = 1; j <= len2; j += 1) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1);
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  const max = dp[len1][len2];
  return len1 + len2 - 2 * max;
};

/**
 * 同1143
 * 要求出最长公共子序列
 * 然后字符串长度减去最长公共子序列长度就是 要删除的操作最小步数
 */


var minDistance = function(word1, word2) {
  const len1 = word1.length;
  const len2 = word2.length;
  const dp = Array(len1 + 1).fill(0).map(() => Array(len2 + 1).fill(0));
  for (let i = 0; i <= len1; i += 1) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= len2; j += 1) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= len1; i += 1) {
    for (let j = 1; j <= len2; j += 1) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }
  return dp[len1][len2];
};

/**
 * 也可以直接用动态规划做
 * dp[i][j]代表 word1前i个 和 word2前j个 字符相同所需最少步骤
 * 显然对于任意 i 有 dp[i][0] = i
 * 同理对于任意 j 有dp[0][j] = j
 *
 * 当 word1[i - 1] === word2[j - 1] 时
 * dp[i][j] 就等于 dp[i - 1][j - 1]
 * 反之
 * dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1
 */