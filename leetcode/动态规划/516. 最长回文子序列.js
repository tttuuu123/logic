/* 
  给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。

  子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。


  示例 1：

  输入：s = "bbbab"
  输出：4
  解释：一个可能的最长回文子序列为 "bbbb" 。
  示例 2：

  输入：s = "cbbd"
  输出：2
  解释：一个可能的最长回文子序列为 "bb" 。
  

  提示：

  1 <= s.length <= 1000
  s 仅由小写英文字母组成
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const dp = Array(s.length).fill(0).map(() => Array(s.length).fill(0));
  for (let i = 0; i < s.length; i += 1) {
    dp[i][i] = 1;
  }
  for (let i = s.length - 1; i >= 0; i += 1) {
    for (let j = i + 1; j < s.length; j += 1) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][s.length - 1];
};

/**
 * dp[i][j] 表示 [i, j] 区间最长回文子串长度
 * 若 s[i] === s[j]
 * 则 dp[i][j] = dp[i + 1][j - 1] + 2
 * 若 s[i] !== s[j]
 * 则 dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
 */