/* 
  给你一个整数数组 prices 和一个整数 k ，其中 prices[i] 是某支给定的股票在第 i 天的价格。

  设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。也就是说，你最多可以买 k 次，卖 k 次。

  注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

  示例 1：

  输入：k = 2, prices = [2,4,1]
  输出：2
  解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
  示例 2：

  输入：k = 2, prices = [3,2,6,5,0,3]
  输出：7
  解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
      随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。
  

  提示：

  1 <= k <= 100
  1 <= prices.length <= 1000
  0 <= prices[i] <= 1000
*/

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  let max = Math.max(k, ~~(prices / 2));
  const dp = Array(prices.length).fill(0).map(() => Array(2).fill(0).map(() => Array(max + 1).fill(0)));
  for (let i = 0; i <= max; i += 1) {
    dp[0][1][i] = -prices[0];
  }
  for (let i = 1; i < prices.length; i += 1) {
    for (let j = 0; j <= max; j += 1) {
      dp[i][0][j] = Math.max(dp[i - 1][0][j], dp[i - 1][1][j - 1] + prices[i]);
      dp[i][1][j] = Math.max(dp[i - 1][1][j], dp[i - 1][0][j] - prices[i]);
    }
    dp[i][0][0] = 0; // 第i天不持有且交易过0次，那么收益一定是0
  }
  return dp[prices.length - 1][0][max];
};

/**
 * 在123题只能买卖2次的基础上扩展
 */