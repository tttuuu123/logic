/* 
  给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。

  你可以对一个单词进行如下三种操作：

  插入一个字符
  删除一个字符
  替换一个字符

  示例 1：

  输入：word1 = "horse", word2 = "ros"
  输出：3
  解释：
  horse -> rorse (将 'h' 替换为 'r')
  rorse -> rose (删除 'r')
  rose -> ros (删除 'e')
  示例 2：

  输入：word1 = "intention", word2 = "execution"
  输出：5
  解释：
  intention -> inention (删除 't')
  inention -> enention (将 'i' 替换为 'e')
  enention -> exention (将 'n' 替换为 'x')
  exention -> exection (将 'n' 替换为 'c')
  exection -> execution (插入 'u')

  提示：

  0 <= word1.length, word2.length <= 500
  word1 和 word2 由小写英文字母组成

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/edit-distance
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i += 1) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j += 1) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }
  return dp[m][n];
};

/**
 * dp[i][j] 表示 word1 从[0, i] 转换到 word2 从[0, j] 所需最少步数
 * 1、若已知dp[i - 1][j - 1]，如果word1[i - 1] === word2[j - 1]，dp[i][j] = dp[i - 1][j - 1]，否则dp[i][j] = dp[i - 1][j - 1] + 1
 * 2、若已知dp[i - 1][j]，则dp[i][j] = dp[i - 1][j] + 1
 * 3、若已知dp[i][j - 1]，则dp[i][j] = dp[i][j - 1] + 1
 */