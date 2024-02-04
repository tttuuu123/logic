/* 
  给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

  你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

  示例 1：


  输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
  输出：[[7,4,1],[8,5,2],[9,6,3]]
  示例 2：


  输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
  输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
  

  提示：

  n == matrix.length == matrix[i].length
  1 <= n <= 20
  -1000 <= matrix[i][j] <= 1000
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length;
  const ret = [];
  for (let j = 0; j < n; j += 1) {
    const temp = [];
    for (let i = n - 1; i >= 0; i -= 1) {
      temp.push(matrix[i][j]);
    }
    ret.push(temp);
  }
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      matrix[i][j] = ret[i][j]
    }
  }
};

/**
 * 旋转90度就是从下往上，从左往右遍历
 * 时间复杂度O(n^2)
 * 空间复杂度O(n^2)
 */