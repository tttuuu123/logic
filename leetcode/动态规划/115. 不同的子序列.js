/* 
  给你两个字符串 s 和 t ，统计并返回在 s 的 子序列 中 t 出现的个数，结果需要对 109 + 7 取模。

  示例 1：

  输入：s = "rabbbit", t = "rabbit"
  输出：3
  解释：
  如下所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
  rabbbit
  rabbbit
  rabbbit
  示例 2：

  输入：s = "babgbag", t = "bag"
  输出：5
  解释：
  如下所示, 有 5 种可以从 s 中得到 "bag" 的方案。 
  babgbag
  babgbag
  babgbag
  babgbag
  babgbag
  

  提示：

  1 <= s.length, t.length <= 1000
  s 和 t 由英文字母组成
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  const MOD = 1e9 + 7;
  const m = s.length;
  const n = t.length;
  const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i += 1) {
    dp[i][n] = 1;
  }

  for (let i = m - 1; i >= 0; i -= 1) {
    for (let j = n - 1; j >= 0; j -= 1) {
      if (s[i] === t[j]) {
        dp[i][j] = (dp[i + 1][j + 1] + dp[i + 1][j]) % MOD;
      } else {
        dp[i][j] = dp[i + 1][j] % MOD;
      }
    }
  }
  return dp[0][0];
};


/**
 * dp[i][j]代表 s[i:] 中 t[j:] 出现的个数
 * s[i:] 表示 区间[i, s.length - 1]的范围
 * 若 s[i] === t[i]，则dp[i][j] = dp[i + 1][j + 1];
 * 若 s[i] !== t[i]，则dp[i][j] = dp[i + 1][j];
 */


var numDistinct = function(s, t) {
  const MOD = 1e9 + 7;
  const m = s.length;
  const n = t.length;
  const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i += 1) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % MOD;
      } else {
        dp[i][j] = dp[i - 1][j] % MOD;
      }
    }
  }
  return dp[m][n];
};


/**
 * dp[i][j]代表 s[:i - 1] 中 t[:j - 1] 出现的个数
 * s[:i - 1] 表示 区间[0, i - 1]的范围
 * 若 s[i - 1] === t[i - 1]，则dp[i][j] = dp[i - 1][j - 1];
 * 若 s[i - 1] !== t[i - 1]，则dp[i][j] = dp[i - 1][j];
 */