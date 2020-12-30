/* 
  给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

  岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

  此外，你可以假设该网格的四条边均被水包围。

  示例 1：

  输入：grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  输出：1
  示例 2：

  输入：grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
  输出：3
 
  提示：

  m == grid.length
  n == grid[i].length
  1 <= m, n <= 300
  grid[i][j] 的值为 '0' 或 '1'

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/number-of-islands
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;
  const row = grid.length;
  const col = grid[0].length;
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      if (grid[i][j] === '1') {
        run(i, j);
        count += 1;
      }
    }
  }
  return count;

  function run(i, j) {
    if (
      i < 0
      || i >= row
      || j < 0
      || j >= col
      || grid[i][j] === '0'
    ) return;
    grid[i][j] = '0';
    run(i + 1, j);
    run(i - 1, j);
    run(i, j + 1);
    run(i, j - 1);
  }
};