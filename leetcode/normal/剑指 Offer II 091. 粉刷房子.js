/* 
  假如有一排房子，共 n 个，每个房子可以被粉刷成红色、蓝色或者绿色这三种颜色中的一种，你需要粉刷所有的房子并且使其相邻的两个房子颜色不能相同。

  当然，因为市场上不同颜色油漆的价格不同，所以房子粉刷成不同颜色的花费成本也是不同的。每个房子粉刷成不同颜色的花费是以一个 n x 3 的正整数矩阵 costs 来表示的。

  例如，costs[0][0] 表示第 0 号房子粉刷成红色的成本花费；costs[1][2] 表示第 1 号房子粉刷成绿色的花费，以此类推。

  请计算出粉刷完所有房子最少的花费成本。

  示例 1：

  输入: costs = [[17,2,17],[16,16,5],[14,3,19]]
  输出: 10
  解释: 将 0 号房子粉刷成蓝色，1 号房子粉刷成绿色，2 号房子粉刷成蓝色。
       最少花费: 2 + 5 + 3 = 10。
  示例 2：

  输入: costs = [[7,6,2]]
  输出: 2
   

  提示:

  costs.length == n
  costs[i].length == 3
  1 <= n <= 100
  1 <= costs[i][j] <= 20

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/JEj789
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
  const used = Array(costs.length).fill(-1);
  return dfs(0)

  function dfs(start) {
    if (start === costs.length) return 0;
    let total = Infinity;
    for (let i = 0; i < 3; i += 1) {
      if (start !== 0 && used[start - 1] === i) continue; 
      used[start] = i;
      total = Math.min(total, costs[start][i] + dfs(start + 1));
      used[start] = -1;
    }
    return total;
  }
};

/**
 * dfs + 回溯 会超时
 */


var minCost = function(costs) {
  const dp = Array(costs.length).fill(0).map(() => Array(3).fill(0));
  dp[0][0] = costs[0][0];
  dp[0][1] = costs[0][1];
  dp[0][2] = costs[0][2];
  for (let i = 1; i < costs.length; i += 1) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i][2];
  }
  return Math.min(...dp[costs.length - 1]);
};

/**
 * dp[i][j] 定义为 0～i 号房子 且 第i号房子 粉刷为j色 所需最小成本
 * 则有
 * dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][0]
 * dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i][1]
 * dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i][2]
 */