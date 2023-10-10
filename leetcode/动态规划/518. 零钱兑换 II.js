/* 
  给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。

  请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。

  假设每一种面额的硬币有无限个。 

  题目数据保证结果符合 32 位带符号整数。

  示例 1：

  输入：amount = 5, coins = [1, 2, 5]
  输出：4
  解释：有四种方式可以凑成总金额：
  5=5
  5=2+2+1
  5=2+1+1+1
  5=1+1+1+1+1
  示例 2：

  输入：amount = 3, coins = [2]
  输出：0
  解释：只用面额 2 的硬币不能凑成总金额 3 。
  示例 3：

  输入：amount = 10, coins = [10] 
  输出：1
  

  提示：

  1 <= coins.length <= 300
  1 <= coins[i] <= 5000
  coins 中的所有值 互不相同
  0 <= amount <= 5000
*/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  const dp = Array(coins.length).fill(0).map(() => Array(amount + 1).fill(0));
  for (let j = 0; j <= amount; j += 1) {
    dp[0][j] = 1;
  }

  for (let i = 1; i < coins.length; i += 1) {
    for (let j = 0; j <= amount; j += 1) {
      if (coins[i] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i]];
      }
    }
  }

  return dp[coins.length - 1][amount];
};

/**
 * dp[i][j] 代表用i种硬币凑成金额j的方案数
 * 若 coins[i] > j，则 dp[i][j] = dp[i - 1][j]
 * 否则 dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i]];
 */

var change = function(amount, coins) {
  const dp = Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < coins.length; i += 1) {
    for (let j = coins[i]; j <= amount; j += 1) {
      dp[j] += dp[j - coins[i]];
    }
  }

  return dp[amount];
};

/**
 * 滚动数组
 * 若dp[j] 代表用i种硬币凑成金额j的方案数
 * dp[j] += dp[j - coins[i]]
 */