/* 
  给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。

  字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）

  题目数据保证答案符合 32 位带符号整数范围。
   
  示例 1：

  输入：s = "rabbbit", t = "rabbit"
  输出：3
  解释：
  如下图所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
  rabbbit
  rabbbit
  rabbbit
  示例 2：

  输入：s = "babgbag", t = "bag"
  输出：5
  解释：
  如下图所示, 有 5 种可以从 s 中得到 "bag" 的方案。 
  babgbag
  babgbag
  babgbag
  babgbag
  babgbag
   

  提示：

  0 <= s.length, t.length <= 1000
  s 和 t 由英文字母组成


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/21dk04
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  const dp = Array(s.length + 1).fill(0).map(() => Array(t.length + 1).fill(0));
  for (let i = 0; i <= s.length; i += 1) {
    dp[i][0] = 1;
  }
  // for (let j = 0; j <= t.length; j += 1) {
  //   dp[0][j] = 0;
  // }
  for (let i = 1; i <= s.length; i += 1) {
    for (let j = 1; j <= t.length; j += 1) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  return dp[s.length][t.length];
};

/**
 * dp[i][j] 定义为 s.substring(0, i + 1) 中子序列 t.substring(0, j + 1) 出现次数
 * 若 s[i - 1] === t[j - 1]
 * 那么 dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
 * dp[i - 1][j] 表示 用s[i - 1] 替换 dp[i - 1][j] 中 s部分中等于s[i - 1]的字符
 * 否则 dp[i][j] = dp[i - 1][j]
 */
