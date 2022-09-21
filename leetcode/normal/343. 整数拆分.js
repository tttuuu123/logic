/* 
  给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。

  返回 你可以获得的最大乘积 。

  示例 1:

  输入: n = 2
  输出: 1
  解释: 2 = 1 + 1, 1 × 1 = 1。
  示例 2:

  输入: n = 10
  输出: 36
  解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
   
  提示:

  2 <= n <= 58

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/integer-break
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i <= n; i += 1) {
    for (let j = 1; j < i; j += 1) {
      dp[i] = Math.max(dp[i], (i - j) * j, dp[i - j] * j);
    }
  }
  return dp[n];
};

/**
 * dp[n] 代表 正整数 n 拆分后得到的最大乘积值
 * 显然有 dp[i] = Math.max(dp[i], dp[i - j] * j)
 * 将 正整数i 拆分为 (i - j) 和 j 后
 * 1、(i - j) 不再拆分，有 dp[i] = Math.max(dp[i], (i - j) * j)
 * 2、(i - j) 继续拆分，有 dp[i] = Math.max(dp[i], dp[i - j] * j)
 */