/* 
  给定一个由 0 和 1 组成的矩阵 matrix ，找出只包含 1 的最大矩形，并返回其面积。

  注意：此题 matrix 输入格式为一维 01 字符串数组。

  示例 1：

  输入：matrix = ["10100","10111","11111","10010"]
  输出：6
  解释：最大矩形如上图所示。
  示例 2：

  输入：matrix = []
  输出：0
  示例 3：

  输入：matrix = ["0"]
  输出：0
  示例 4：

  输入：matrix = ["1"]
  输出：1
  示例 5：

  输入：matrix = ["00"]
  输出：0
   

  提示：

  rows == matrix.length
  cols == matrix[0].length
  0 <= row, cols <= 200
  matrix[i][j] 为 '0' 或 '1'


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/PLYXKQ
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string[]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  const row = matrix.length;
  if (row === 0) return 0;
  const col = matrix[0].length;
  let max = 0;
  // 标记当前行为底下，每列的高
  const heights = Array(col).fill(0);
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      if (i === 0) {
        heights[j] = +matrix[0][j];
      } else {
        heights[j] = +matrix[i][j] === 0 ? 0 : heights[j] + 1;
      }
    }

    const stack = [-1];
    for (let k = 0; k < col; k += 1) {
      while (stack.length > 1 && heights[k] <= heights[stack[stack.length - 1]]) {
        const prevIdx = stack.pop();
        const height = heights[prevIdx];
        const width = (k - 1) - (stack[stack.length - 1] + 1) + 1;
        max = Math.max(max, height * width);
      }
      stack.push(k);
    }
    while (stack.length > 1) {
      const prevIdx = stack.pop();
      const height = heights[prevIdx];
      const width = (col - 1) - (stack[stack.length - 1] + 1) + 1;
      max = Math.max(max, height * width);
    }
  }
  return max;
};

/**
 * 如果从行的角度看：每次看[0, i]这个范围，i的区间[0, row]
 * 可以得到[0, i]这个范围的以i行作为底，每个下标的高
 * 这样就转为了求直方图的最大矩形面积
 */