/* 
  给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

  说明：每次只能向下或者向右移动一步。

  示例:

  输入:
  [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]
  输出: 7
  解释: 因为路径 1→3→1→1→1 的总和最小。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/minimum-path-sum
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const result = [[grid[0][0]]];
  for (let i = 1; i < m; i += 1) {
    result[i] = [];
    result[i][0] = result[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < n; j += 1) {
    result[0][j] = result[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < m; i += 1) {
    for (let j = 1; j < n; j += 1) {
      result[i][j] = Math.min(result[i - 1][j], result[i][j - 1]) + grid[i][j];
    }
  }
  return result[m - 1][n - 1];
};

/**
 * f(i, j) = min(f(i - 1, j), f(i, j - 1)) + val(i, j)
 * 要注意的就是第一行与第一列的初始化
 * 第一行的每个元素只能向右移动才能经过
 * 第一列的每个元素只能向下移动才能经过
 */