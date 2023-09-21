/* 
  给定一个整数数组prices，其中第  prices[i] 表示第 i 天的股票价格 。​

  设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

  卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
  注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

  示例 1:

  输入: prices = [1,2,3,0,2]
  输出: 3 
  解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
  示例 2:

  输入: prices = [1]
  输出: 0

  提示：

  1 <= prices.length <= 5000
  0 <= prices[i] <= 1000
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const dp = Array(prices.length).fill(0).map(() => Array(3).fill(0));
  dp[0][0] = -prices[0];
  for (let i = 1; i < prices.length; i += 1) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
    dp[i][1] = dp[i - 1][0] + prices[i];
    dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]);
  }
  return Math.max(...dp[prices.length - 1]);
};

/**
 * dp[i][0] 表示第i天处于持有状态最大利润
 *  1、第 i - 1 天处于持有状态，第 i 天不交易
 *  2、第 i - 1 天处于冻结状态，第 i 天持有
 *  dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i])
 * 
 * dp[i][1] 表示第i天处于不持有，且处于冷冻状态状态最大利润
 *  1、第 i - 1 天处于持有状态，第 i 天卖出
 *  dp[i][1] = dp[i - 1][0] + prices[i]
 * 
 * dp[i][2] 表示第i天处于不持有，且不处于冻结状态最大利润
 *  1、第 i - 1 天处于不持有，且处于冷冻状态
 *  2、第 i - 1 天处于不持有，且不处于冷冻状态
 *  dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2])
 * 
 */