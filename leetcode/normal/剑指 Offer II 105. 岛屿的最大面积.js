/* 
  给定一个由 0 和 1 组成的非空二维数组 grid ，用来表示海洋岛屿地图。

  一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

  找到给定的二维数组中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

  示例 1:

  输入: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
  输出: 6
  解释: 对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。
  示例 2:

  输入: grid = [[0,0,0,0,0,0,0,0]]
  输出: 0

  提示：

  m == grid.length
  n == grid[i].length
  1 <= m, n <= 50
  grid[i][j] is either 0 or 1

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/ZL6zAn
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const row = grid.length;
  const col = grid[0].length;
  let ret = 0;
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      if (+grid[i][j] === 1) {
        ret = Math.max(ret, dfs(i, j));
      }
    }
  }
  return ret;

  function dfs(i, j) {
    if (i < 0 || i >= row) return 0;
    if (j < 0 || j >= col) return 0;
    if (+grid[i][j] === 0) return 0;
    grid[i][j] = 0;
    return 1 + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j + 1) + dfs(i, j - 1);
  }
};