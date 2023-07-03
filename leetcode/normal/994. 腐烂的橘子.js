/* 
  在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：

  值 0 代表空单元格；
  值 1 代表新鲜橘子；
  值 2 代表腐烂的橘子。
  每分钟，腐烂的橘子 周围 4 个方向上相邻 的新鲜橘子都会腐烂。

  返回 直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。

  示例 1：

  输入：grid = [[2,1,1],[1,1,0],[0,1,1]]
  输出：4
  示例 2：

  输入：grid = [[2,1,1],[0,1,1],[1,0,1]]
  输出：-1
  解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个正向上。
  示例 3：

  输入：grid = [[0,2]]
  输出：0
  解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。
   

  提示：

  m == grid.length
  n == grid[i].length
  1 <= m, n <= 10
  grid[i][j] 仅为 0、1 或 2

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/rotting-oranges
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const dir = [[1, 0], [-1, 0], [0, -1], [0, 1]];
  const row = grid.length;
  const col = grid[0].length;
  const queue = [];
  let count = 0;
  let time = 0;
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        count += 1;
      }
    }
  }
  while (queue.length && count > 0) {
    let len = queue.length;
    while (len > 0) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i += 1) {
        const nx = x + dir[i][0];
        const ny = y + dir[i][1];
        if (nx < 0 || nx >= row || ny < 0 || ny >= col || grid[nx][ny] !== 1) continue;
        queue.push([nx, ny]);
        grid[nx][ny] = 2;
        count -= 1;
      }
      len -= 1;
    }
    time += 1;
  }
  return count === 0 ? time : -1;
};