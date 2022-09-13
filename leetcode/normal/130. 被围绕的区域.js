/* 
  给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

  示例 1：

  输入：board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
  输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
  解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
  示例 2：

  输入：board = [["X"]]
  输出：[["X"]]
   

  提示：

  m == board.length
  n == board[i].length
  1 <= m, n <= 200
  board[i][j] 为 'X' 或 'O'

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/surrounded-regions
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const row = board.length;
  const col = board[0].length;
  const queue = [];
  const visit = [];
  const ret = [];
  for (let i = 0; i < row; i += 1) {
    visit.push([]);
    ret.push([]);
    for (let j = 0; j < col; j += 1) {
      ret[i].push('X');
      if (
        (i === 0 || i === row - 1 || j === 0 || j === col - 1) &&
        board[i][j] === 'O'
      ) {
        queue.push([i, j]);
        visit[i][j] = true;
      } else {
        visit[i][j] = false;
      }
    }
  }

  const dirEnum = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  while (queue.length) {
    const [i, j] = queue.shift();
    ret[i][j] = 'O';
    for (let k = 0; k < dirEnum.length; k += 1) {
      const x = i + dirEnum[k][0];
      const y = j + dirEnum[k][1];
      if (x < 0 || x > row - 1 || y < 0 || y > col - 1) continue;
      if (visit[x][y]) continue;
      visit[x][y] = true;
      if (board[x][y] === 'O') queue.push([x, y]);
    }
  }
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      board[i][j] = ret[i][j]
    }
  }
  return ret;
};

/**
 * 若不被包围，肯定是从边界上的O出发，所能到达的所有O，剩余的都是可以被修改为X的
 */