/* 
  给定两个字符串s1 和 s2，返回 使两个字符串相等所需删除字符的 ASCII 值的最小和 。

  示例 1:

  输入: s1 = "sea", s2 = "eat"
  输出: 231
  解释: 在 "sea" 中删除 "s" 并将 "s" 的值(115)加入总和。
  在 "eat" 中删除 "t" 并将 116 加入总和。
  结束时，两个字符串相等，115 + 116 = 231 就是符合条件的最小和。
  示例 2:

  输入: s1 = "delete", s2 = "leet"
  输出: 403
  解释: 在 "delete" 中删除 "dee" 字符串变成 "let"，
  将 100[d]+101[e]+101[e] 加入总和。在 "leet" 中删除 "e" 将 101[e] 加入总和。
  结束时，两个字符串都等于 "let"，结果即为 100+101+101+101 = 403 。
  如果改为将两个字符串转换为 "lee" 或 "eet"，我们会得到 433 或 417 的结果，比答案更大。
  

  提示:

  0 <= s1.length, s2.length <= 1000
  s1 和 s2 由小写英文字母组成
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
  const m = s1.length;
  const n = s2.length
  const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i += 1) {
    dp[i][0] = dp[i - 1][0] + s1[i - 1].charCodeAt();
  }

  for (let j = 1; j <= n; j += 1) {
    dp[0][j] = dp[0][j - 1] + s2[j - 1].charCodeAt();
  }

  for (let i = 1; i <= m; i += 1) {
    const code1 = s1[i - 1].charCodeAt();
    for (let j = 1; j <= n; j += 1) {
      const code2 = s2[j - 1].charCodeAt();
      if (code1 === code2) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // dp[i - 1][j] 即 将s1[i - 1] 删除
        // dp[i][j - 1] 即 将s2[j - 1] 删除
        // 不考虑 dp[i - 1][j - 1] 是因为本题只有删除操作，同时删2个字母一定大于删除一个
        dp[i][j] = Math.min(dp[i - 1][j] + code1, dp[i][j - 1] + code2);
      }
    }
  }

  return dp[m][n];
};

/**
 * 和72题类似
 * 因为字母的 ASCII 值 的范围是[97, 122]
 * 所以任意2个字母的 ASCII 值 一定大于 任意1个字母的 ASCII 值
 * 所以就是求将2个字符串转为相同字符串所需最小步数，这些步数对应修改的字母的 ASCII 值的和就是解
 */
