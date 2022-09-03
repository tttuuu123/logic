/* 
  编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

  每行中的整数从左到右按升序排列。
  每行的第一个整数大于前一行的最后一个整数。

  示例 1：

  输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
  输出：true
  示例 2：

  输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
  输出：false
   

  提示：

  m == matrix.length
  n == matrix[i].length
  1 <= m, n <= 100
  -104 <= matrix[i][j], target <= 104


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/search-a-2d-matrix
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const arr = matrix.flat();
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    const mid = (l + r) >>> 1;
    if (arr[mid] === target) return true;
    if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return false;
};

/**
 * 二维数组拉平的时间复杂度是O(N) ?
 * 二分查找的时间复杂度O(logN)
 * 所以总O(N) + O(logN) 取大就是O(N) ?
 */

var searchMatrix = function(matrix, target) {
  let l = 0;
  let r = matrix.length - 1;
  let idx = 0;
  if (matrix[r][0] <= target) {
    idx = r;
  } else {
    while (l < r) {
      const mid = (l + r) >>> 1;
      if (matrix[mid][0] === target) return true;
      if (matrix[mid][0] < target) {
        idx = mid;
        l = mid + 1;
      } else {
        r = mid;
      }
    }
  }
 
  const arr = matrix[idx];
  l = 0;
  r = arr.length - 1;
  while (l <= r) {
    const mid = (l + r) >>> 1;
    if (arr[mid] === target) return true;
    if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return false;
};

/**
 * 用二次二分查找，
 * 先找在哪一行
 * 再找存不存在
 * 两次时间复杂度都是O(logN)
 * 所以总2*O(logN)，也就是O(logN)
 */


