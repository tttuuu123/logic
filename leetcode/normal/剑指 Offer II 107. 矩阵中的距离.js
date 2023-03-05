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
  链接：https://leetcode.cn/problems/2bCMpM
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  const row = mat.length;
  const col = mat[0].length;
  const ret = Array(row).fill(0).map(() => Array(col).fill(Infinity));
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      if (mat[i][j] === 0) {
        ret[i][j] = 0;
      }
    }
  }
  // 向左 或 向上找
  // dp[i][j] - Math.min(dp[i][j], dp[i - 1][j] + 1, dp[i][ j - 1] + 1)
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      if (i - 1 >= 0) {
        ret[i][j] = Math.min(ret[i][j], ret[i - 1][j] + 1);
      }
      if (j - 1 >= 0) {
        ret[i][j] = Math.min(ret[i][j], ret[i][j - 1] + 1);
      }
    }
  }
  // 向右 或 向下找
  for (let i = row - 1; i >= 0; i -= 1) {
    for (let j = col - 1; j >= 0; j -= 1) {
      if (i + 1 < row) {
        ret[i][j] = Math.min(ret[i][j], ret[i + 1][j] + 1);
      }
      if (j + 1 < col) {
        ret[i][j] = Math.min(ret[i][j], ret[i][j + 1] + 1);
      }
    }
  }
  return ret;
};