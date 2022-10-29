/* 
  输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

  示例 1：

  输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
  输出：[1,2,3,6,9,8,7,4,5]
  示例 2：

  输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
  输出：[1,2,3,4,8,12,11,10,9,5,6,7]
   

  限制：

  0 <= matrix.length <= 100
  0 <= matrix[i].length <= 100

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) return [];
  const ret = [];
  let lB = 0;
  let rB = matrix[0].length - 1;
  let tB = 0;
  let bB = matrix.length - 1;
  while (true) {
    for (let i = lB; i <= rB; i += 1) {
      ret.push(matrix[tB][i]);
    }
    tB += 1;
    if (tB > bB) break;
    for (let i = tB; i <= bB; i += 1) {
      ret.push(matrix[i][rB]);
    }
    rB -= 1;
    if (rB < lB) break;
    for (let i = rB; i >= lB; i -= 1) {
      ret.push(matrix[bB][i]);
    }
    bB -= 1;
    if (bB < tB) break;
    for (let i = bB; i >= tB; i -= 1) {
      ret.push(matrix[i][lB]);
    }
    lB += 1;
    if (lB > rB) break;
  }
  return ret;
};