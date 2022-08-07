/* 
  给你一个大小为 m x n 的矩阵 mat 和一个整数阈值 threshold。

  请你返回元素总和小于或等于阈值的正方形区域的最大边长；如果没有这样的正方形区域，则返回 0 。

  示例 1：


  输入：mat = [[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]], threshold = 4
  输出：2
  解释：总和小于或等于 4 的正方形的最大边长为 2，如图所示。
  示例 2：

  输入：mat = [[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]], threshold = 1
  输出：0
   
  提示：

  m == mat.length
  n == mat[i].length
  1 <= m, n <= 300
  0 <= mat[i][j] <= 104
  0 <= threshold <= 105 


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {
  const row = mat.length;
  const col = mat[0].length;
  const dp = [];
  for (let i = 0; i <= row; i += 1) {
    dp[i] = Array(col + 1).fill(0);
  }
  dp[1][1] = mat[0][0];
  for (let i = 1; i <= row; i += 1) {
    for (let j = 1; j <= col; j += 1) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + mat[i - 1][j - 1]
    }
  }

  const edge = Math.min(row, col);
  let ret = 0;
  for (let i = 1; i <= row; i += 1) {
    for (let j = 1; j <= col; j += 1) {
        for (let c = ret + 1; c < edge + 1; c += 1) {
            if (i+c-1 <= row && j+c-1 <= col && getRectSum(i, j, i+c-1, j+c-1) <= threshold) {
                ret += 1
            } else {
                break
            }
        }
    }
  }
  return ret

  function getRectSum(x1, y1, x2, y2) {
    return dp[x2][y2] - dp[x2][y1 - 1] - dp[x1 - 1][y2] + dp[x1 - 1][y1 - 1];
  }
};

/**
 * 我也不是很懂
 * 大概意思是求二维前缀和
 * dp[i][j] = dp[i - 1][j] + dp [i][j - 1] - dp[i - 1][j - 1] + mat[i][j]
 * 然后有个小技巧是dp第一行第一列都赋值为0，这样可以防止越界)
 * 不过这种情况就变成了dp[i][j] = dp[i - 1][j] + dp [i][j - 1] - dp[i - 1][j - 1] + mat[i - 1][j - 1]
 */