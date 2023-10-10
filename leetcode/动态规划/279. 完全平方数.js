/* 
  给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。

  完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

  示例 1：

  输入：n = 12
  输出：3 
  解释：12 = 4 + 4 + 4
  示例 2：

  输入：n = 13
  输出：2
  解释：13 = 4 + 9
  
  提示：

  1 <= n <= 104
*/

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const dp = Array(n + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;

  for (let i = 0; i <= n; i += 1) {
    for (let j = 1; j * j <= i; j += 1) {
      dp[j] = Math.min(dp[j], dp[j - i * i] + 1);
    }
  }
  return dp[n];
};

/**
 * 同样是 完全背包问题
 * 平方数就是可以无限使用的物品，整数 n 就是背包
 * 若dp[j] 代表用i个数 组成 和为 n 的完全平方数的最少数量
 * dp[j] = dp[j - i * i] + 1
 */