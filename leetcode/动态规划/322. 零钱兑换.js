/* 
  给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

  计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

  你可以认为每种硬币的数量是无限的。

  示例 1：

  输入：coins = [1, 2, 5], amount = 11
  输出：3 
  解释：11 = 5 + 5 + 1
  示例 2：

  输入：coins = [2], amount = 3
  输出：-1
  示例 3：

  输入：coins = [1], amount = 0
  输出：0
  

  提示：

  1 <= coins.length <= 12
  1 <= coins[i] <= 231 - 1
  0 <= amount <= 104
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const dp = Array(coins.length + 1).fill(0).map(() => Array(amount + 1).fill(Number.MAX_VALUE));
  for (let i = 0; i <= coins.length; i += 1) {
    dp[i][0] = 0;
  }
  for (let j = 1; j <= amount; j += 1) {
    for (let i = 1; i <= coins.length; i += 1) {
      dp[i][j] = dp[i - 1][j];
      if (j >= coins[i - 1]) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j - coins[i - 1]] + 1);
      }
    } 
  }

  return dp[coins.length][amount];
};

/**
 * dp[i][j] 表示使用前i枚硬币可以凑成j的最小硬币数
 * dp[i][j] = Math.min(dp[i][j - coins[i]] + 1，dp[i - 1][j])
 */

var coinChange = function(coins, amount) {
  const dp = Array(amount + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i += 1) {
    for (let j = coins[i]; j <= amount; j += 1) {
      dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
    }
  }
  
  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
};
