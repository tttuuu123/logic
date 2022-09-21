/* 
  给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

  示例 1:

  输入: coins = [1, 2, 5], amount = 11
  输出: 3 
  解释: 11 = 5 + 5 + 1
  示例 2:

  输入: coins = [2], amount = 3
  输出: -1
   

  说明:
  你可以认为每种硬币的数量是无限的。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/coin-change
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  // 硬币最多的场景就是amount枚，所以初始赋予一个不可能的答案amount + 1
  const dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i += 1) {
    coins.forEach((coin) => {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    });
  }
  // 如果等于amount + 1说明不可能
  return dp[amount] === amount + 1 ? -1 : dp[amount];
}
/**
 * dp[n] 代表 n 元 所需最小硬币数
 */