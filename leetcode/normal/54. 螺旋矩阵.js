/* 
  给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

  示例 1：


  输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
  输出：[1,2,3,6,9,8,7,4,5]
  示例 2：


  输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
  输出：[1,2,3,4,8,12,11,10,9,5,6,7]
  

  提示：

  m == matrix.length
  n == matrix[i].length
  1 <= m, n <= 10
  -100 <= matrix[i][j] <= 100
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const ret = [];
  const row = matrix.length;
  const col = matrix[0].length;
  help(0, row - 1, 0, col - 1, 0)
  return ret;

  function help(top, bottom, left, right, direct) {
    if (direct === 0) {
      for (let i = left; i <= right; i += 1) {
        ret.push(matrix[top][i]);
      }
      top += 1;
    } else if (direct === 1) {
      for (let i = top; i <= bottom; i += 1) {
        ret.push(matrix[i][right]);
      }
      right -= 1;
    } else if (direct === 2) {
      for (let i = right; i >= left; i -= 1) {
        ret.push(matrix[bottom][i]);
      }
      bottom -= 1
    } else {
      for (let i = bottom; i >= top; i -= 1) {
        ret.push(matrix[i][left]);
      }
      left += 1;
    }
    if (left > right || top > bottom) return;
    direct = (direct + 1) % 4;
    help(top, bottom, left, right, direct);
  }
};