/* 
  假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

  每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

  示例 1：

  输入：n = 2
  输出：2
  解释：有两种方法可以爬到楼顶。
  1. 1 阶 + 1 阶
  2. 2 阶
  示例 2：

  输入：n = 3
  输出：3
  解释：有三种方法可以爬到楼顶。
  1. 1 阶 + 1 阶 + 1 阶
  2. 1 阶 + 2 阶
  3. 2 阶 + 1 阶
  

  提示：

  1 <= n <= 45
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const dp = [0, 1, 2];
  for (let i = 3; i <= n; i += 1) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

/**
 * f(n)代表爬n阶楼梯的方法数
 * f(n) = f(n - 1) + f(n - 2)
 */

var climbStairs = function(n) {
  let a = 0;
  let b = 0;
  let c = 1;
  for (let i = 1; i <= n; i += 1) {
    a = b;
    b = c;
    c = a + b;
  }
  return c;
};
/**
 * 还可以降低内存空间
 * 空间复杂度做到O(1)
 */