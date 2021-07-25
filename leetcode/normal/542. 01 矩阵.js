/* 
  给定一个由 0 和 1 组成的矩阵 mat ，请输出一个大小相同的矩阵，其中每一个格子是 mat 中对应位置元素到最近的 0 的距离。

  两个相邻元素间的距离为 1 。

  示例 1：

  输入：mat = [[0,0,0],[0,1,0],[0,0,0]]
  输出：[[0,0,0],[0,1,0],[0,0,0]]
  示例 2：

  输入：mat = [[0,0,0],[0,1,0],[1,1,1]]
  输出：[[0,0,0],[0,1,0],[1,2,1]]

  提示：

  m == mat.length
  n == mat[i].length
  1 <= m, n <= 104
  1 <= m * n <= 104
  mat[i][j] is either 0 or 1.
  mat 中至少有一个 0 


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/01-matrix
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  const ret = [];
  const row = mat.length;
  const col = mat[0].length;
  const visit = [];
  for (let i = 0; i < row; i += 1) {
    ret.push([]);
    visit.push([]);
    for (let j = 0; j < col; j += 1) {
      ret[i].push(mat[i][j] === 0 ? 0 : Infinity);
      visit[i].push(false);
    }
  }
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      help(i, j);
    }
  }
  return ret;

  function help(i, j) {
    if (i < 0 || i >= row || j < 0 || j >= col) return Infinity;
    if (visit[i][j]) return isNaN(ret[i][j]) ? Infinity : ret[i][j];
    if (mat[i][j] === 0) {
      ret[i][j] = 0;
      return 0;
    }
    visit[i][j] = true;
    const top = help(i, j - 1);
    const right = help(i + 1, j);
    const bottom = help(i, j + 1);
    const left = help(i - 1, j);
    visit[i][j] = false;
    ret[i][j] = Math.min(top, right, bottom, left) + 1;
    return ret[i][j];
  }
};

/**
 * 上面的暴力+回溯会超时
 * 可以换个思路，考虑从每个0出发，用广搜队列实现
 */

var updateMatrix = function(mat) {
  const ret = [];
  const queue = [];
  const row = mat.length;
  const col = mat[0].length;
  for (let i = 0; i < row; i += 1) {
    ret.push([]);
    for (let j = 0; j < col; j += 1) {
      ret[i].push(mat[i][j] === 0 ? 0 : -1);
    }
  }
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      if (mat[i][j] !== 0) continue;
      queue.push({i, j, dis: 0})
    }
  }
  const diffEnum = [[0, -1], [0, 1], [-1, 0], [1, 0]];
  while (queue.length) {
    const temp = queue.shift();
    for (let i = 0; i < 4; i += 1) {
      const x = temp.i + diffEnum[i][0];
      const y = temp.j + diffEnum[i][1];
      if (x < 0 || x >= row || y < 0 || y >= col) continue;
      if (ret[x][y] !== -1) continue;
      ret[x][y] = temp.dis + 1;
      queue.push({
        i: x,
        j: y,
        dis: ret[x][y] + 1
      });
    }
  }
  return ret;
}
