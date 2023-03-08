/* 
  给定一个 m x n 整数矩阵 matrix ，找出其中 最长递增路径 的长度。

  对于每个单元格，你可以往上，下，左，右四个方向移动。 不能 在 对角线 方向上移动或移动到 边界外（即不允许环绕）。

  示例 1：

  输入：matrix = [[9,9,4],[6,6,8],[2,1,1]]
  输出：4 
  解释：最长递增路径为 [1, 2, 6, 9]。
  示例 2：

  输入：matrix = [[3,4,5],[3,2,6],[2,2,1]]
  输出：4 
  解释：最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。
  示例 3：

  输入：matrix = [[1]]
  输出：1

  提示：

  m == matrix.length
  n == matrix[i].length
  1 <= m, n <= 200
  0 <= matrix[i][j] <= 231 - 1


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/fpTFWP
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  const map = new Map();
  let ret = 0;
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      ret = Math.max(ret, dfs(i, j));
    }
  }
  return ret;

  function dfs(i, j) {
    const key = `${i}-${j}`;
    if (map.has(key)) return map.get(key);
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let max = 1;
    for (const dir of dirs) {
      const ni = i + dir[0];
      const nj = j + dir[1];
      if (ni < 0 || ni >= row) continue;
      if (nj < 0 || nj >= col) continue;
      if (matrix[ni][nj] > matrix[i][j]) {
        max = Math.max(max, dfs(ni, nj) + 1);
        map.set(key, max);
      }
    }
    return max;
  }
};

/**
 * dfs + 记忆化数组
 */
