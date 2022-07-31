/* 
  编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

  每行的元素从左到右升序排列。
  每列的元素从上到下升序排列。

  示例 1：

  输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
  输出：true
  示例 2：


  输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
  输出：false

  提示：

  m == matrix.length
  n == matrix[i].length
  1 <= n, m <= 300
  -109 <= matix[i][j] <= 109
  每行的所有元素从左到右升序排列
  每列的所有元素从上到下升序排列
  -109 <= target <= 109


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/search-a-2d-matrix-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  // 右上角坐标
  let i = 0;
  let j = matrix[0].length - 1;
  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] === target) return true;
    if (matrix[i][j] < target) {
      i += 1;
    } else {
      j -= 1;
    }
  }
  return false;
};

/**
 * 此种矩阵有个特点，右上角的值a, 坐标[i, j]
 * a是第一行最大的元素，同时也是最后一列最小的元素
 * 如果目标值比a大，则说明i可以 加1
 * 如果目标值比a小，则说明j可以 减1
 */

/**
 * 同时也可以对matrix中每行都用一次二分查找
 */