/* 
  给定一个二维矩阵 matrix，以下类型的多个请求：

  计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。
  实现 NumMatrix 类：

  NumMatrix(int[][] matrix) 给定整数矩阵 matrix 进行初始化
  int sumRegion(int row1, int col1, int row2, int col2) 返回左上角 (row1, col1) 、右下角 (row2, col2) 的子矩阵的元素总和。
   

  示例 1：


  输入: 
  ["NumMatrix","sumRegion","sumRegion","sumRegion"]
  [[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]
  输出: 
  [null, 8, 11, 12]

  解释:
  NumMatrix numMatrix = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]]);
  numMatrix.sumRegion(2, 1, 4, 3); // return 8 (红色矩形框的元素总和)
  numMatrix.sumRegion(1, 1, 2, 2); // return 11 (绿色矩形框的元素总和)
  numMatrix.sumRegion(1, 2, 2, 4); // return 12 (蓝色矩形框的元素总和)
   

  提示：

  m == matrix.length
  n == matrix[i].length
  1 <= m, n <= 200
  -105 <= matrix[i][j] <= 105
  0 <= row1 <= row2 < m
  0 <= col1 <= col2 < n
  最多调用 104 次 sumRegion 方法


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/O4NDxx
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  const pre = Array(row + 1).fill(0).map(() => Array(col + 1).fill(0));
  for (let i = 0; i < row; i += 1) {
    let sum = 0;
    for (let j = 0; j < col; j += 1) {
      sum += matrix[i][j];
      pre[i + 1][j + 1] = pre[i][j + 1] + sum;
    }
  }
  this.pre = pre;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  const pre = this.pre;
  return pre[row2 + 1][col2 + 1] - pre[row1][col2 + 1] - pre[row2 + 1][col1] + pre[row1][col1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */