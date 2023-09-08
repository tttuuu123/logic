/* 
  一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

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
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const row = m;
  const col = n;
  const visited = Array(row).fill(0).map(() => Array(col).fill(0));
  const dirEnum = [[0, 1], [1, 0]];
  let ret = 0;
  help(0, 0);
  return ret;

  function help(i, j) {
    if (i === row - 1 && j === col - 1) {
      ret += 1;
      return;
    }
    visited[i][j] = 1;
    for (let k = 0; k < 2; k += 1) {
      const x = i + dirEnum[k][0];
      const y = j + dirEnum[k][1];
      if (x < 0 || x > row - 1) continue;
      if (y < 0 || y > col - 1) continue;
      if (visited[x][y]) continue;
      help(x, y);
    }
    visited[i][j] = 0;
  }
};

/**
 * 递归
 */

var uniquePaths = function(m, n) {
  const dp = Array(m).fill(0).map(() => Array(n).fill(1));
  for (let i = 1; i < m ; i += 1) {
    for (let j = 1; j < n; j += 1) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

/**
 * 动规
 * dp[i][j] 代表到第[i, j]坐标路径数
 * dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
 */