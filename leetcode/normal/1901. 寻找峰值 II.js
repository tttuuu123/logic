/* 
  一个 2D 网格中的 峰值 是指那些 严格大于 其相邻格子(上、下、左、右)的元素。

  给你一个 从 0 开始编号 的 m x n 矩阵 mat ，其中任意两个相邻格子的值都 不相同 。找出 任意一个 峰值 mat[i][j] 并 返回其位置 [i,j] 。

  你可以假设整个矩阵周边环绕着一圈值为 -1 的格子。

  要求必须写出时间复杂度为 O(m log(n)) 或 O(n log(m)) 的算法
   

  示例 1:

  输入: mat = [[1,4],[3,2]]
  输出: [0,1]
  解释: 3 和 4 都是峰值，所以[1,0]和[0,1]都是可接受的答案。
  示例 2:



  输入: mat = [[10,20,15],[21,30,14],[7,16,32]]
  输出: [1,1]
  解释: 30 和 32 都是峰值，所以[1,1]和[2,2]都是可接受的答案。
   

  提示：

  m == mat.length
  n == mat[i].length
  1 <= m, n <= 500
  1 <= mat[i][j] <= 105
  任意两个相邻元素均不相等.


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/find-a-peak-element-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {
  const row = mat.length;
  const col = mat[0].length;
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      if (mat[i][j] >= 1) {
        if (check(i, j)) return [i, j];
      }
    }
  }

  function check(x, y) {
    const val = mat[x][y];

    const leftVal = getVal(x - 1, y);
    if (val < leftVal) return false;
    if (leftVal !== -1) mat[x - 1][y] = -1;

    const topVal = getVal(x, y - 1);
    if (val < topVal) return false;
    if (topVal !== -1) mat[x][y - 1] = -1;

    const rightVal = getVal(x + 1, y);
    if (val < rightVal) return false;
    if (rightVal !== -1) mat[x + 1][y] = -1;

    const bottomVal = getVal(x, y + 1);
    if (val < bottomVal) return false;
    if (bottomVal !== -1) mat[x][y + 1] = -1;

    return true;
  }

  function getVal(x, y) {
    if (!mat[x] || !mat[x][y]) return -1;
    return mat[x][y];
  }
};

/**
 * 暴力解法，中途会对不可能的坐标提前标记
 */