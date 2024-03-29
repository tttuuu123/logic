/* 
  给你一个 n x n 的二进制矩阵 grid 中，返回矩阵中最短 畅通路径 的长度。如果不存在这样的路径，返回 -1 。

  二进制矩阵中的 畅通路径 是一条从 左上角 单元格（即，(0, 0)）到 右下角 单元格（即，(n - 1, n - 1)）的路径，该路径同时满足下述要求：

  路径途经的所有单元格都的值都是 0 。
  路径中所有相邻的单元格应当在 8 个方向之一 上连通（即，相邻两单元之间彼此不同且共享一条边或者一个角）。
  畅通路径的长度 是该路径途经的单元格总数。

  示例 1：


  输入：grid = [[0,1],[1,0]]
  输出：2
  示例 2：

  输入：grid = [[0,0,0],[1,1,0],[1,1,0]]
  输出：4
  示例 3：

  输入：grid = [[1,0,0],[1,1,0],[1,1,0]]
  输出：-1

  提示：

  n == grid.length
  n == grid[i].length
  1 <= n <= 100
  grid[i][j] 为 0 或 1


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/shortest-path-in-binary-matrix
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  if (grid[0][0] !== 0) return -1;
  const dirEnum = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];
  const row = grid.length;
  const col = grid[0].length;
  const visit = [];
  for (let i = 0; i < row; i += 1) {
    visit.push([]);
    for (let j = 0; j < col; j += 1) {
      visit[i].push(false);
    }
  }
  // 定义一个队列，分别为i, j和走过的距离
  const queue = [[0, 0, 1]];
  visit[0][0] = true;
  while (queue.length) {
    const [i, j, dis] = queue.shift();
    if (i === row - 1 && j === col - 1) return dis;
    for (let k = 0; k < dirEnum.length; k += 1) {
      const x = i + dirEnum[k][0];
      const y = j + dirEnum[k][1];
      if (x < 0 || x >= row || y < 0 || y >= col) continue;
      if (grid[x][y] === 1) continue;
      if (visit[x][y]) continue;
      visit[x][y] = true;
      queue.push([x, y, dis + 1]);
    }
  }
  return -1;
};

/**
 * BFS和DFS的使用场景：
 * 如果需要找到某个结果是否存在，那么用DFS效率更高，因为DFS会把一条路径进行到底才会回溯
 * 如果是要某个结果最短，那么BFS效率更高，因为BFS是所有路径同时尝试
 *
 * BFS中的visited为什么可以通用：
 * BFS是在同时尝试所有可能的路径，哪个最快到底，哪个最短
 * 如果visited为true表明了之前已经有路径更短/相等步数到达这个点，显然就不需要在继续尝试，这个点可以直接放弃
 */