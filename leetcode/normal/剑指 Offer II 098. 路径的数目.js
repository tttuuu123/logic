/* 
  一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

  机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

  问总共有多少条不同的路径？
   

  示例 1：

  输入：m = 3, n = 7
  输出：28
  示例 2：

  输入：m = 3, n = 2
  输出：3
  解释：
  从左上角开始，总共有 3 条路径可以到达右下角。
  1. 向右 -> 向下 -> 向下
  2. 向下 -> 向下 -> 向右
  3. 向下 -> 向右 -> 向下
  示例 3：

  输入：m = 7, n = 3
  输出：28
  示例 4：

  输入：m = 3, n = 3
  输出：6
   

  提示：

  1 <= m, n <= 100
  题目数据保证答案小于等于 2 * 109

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/2AoeFn
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const dp = Array(m).fill(0).map(() => Array(n));
  for (let i = 0; i < m; i += 1) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j += 1) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }
  return dp[m - 1][n - 1];
};

/**
 * dp[i][j] 定义为 到达 [i, j] 坐标的不同路径数
 * dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
 */

var uniquePaths = function(m, n) {
  let ret = 0;
  dfs(0, 0);
  return ret;

  function dfs(i, j) {
    if (i === m) return;
    if (j === n) return;
    if (i === m - 1 && j === n - 1) {
      ret += 1;
      return;
    }
    dfs(i + 1, j);
    dfs(i, j + 1);
  }
};

/**
 * 递归实现代码上更简单 时间复杂度O(m*n)
 */