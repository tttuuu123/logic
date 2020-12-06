/* 
  给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

  在杨辉三角中，每个数是它左上方和右上方的数的和。

  示例:

  输入: 5
  输出:
  [
      [1],
      [1,1],
    [1,2,1],
    [1,3,3,1],
  [1,4,6,4,1]
  ]
  通过次数121,279提交次数177,927

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/pascals-triangle
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const ret = new Array(numRows).fill(0).map((_, i) => new Array(i + 1).fill(1));
  for (let i = 2; i < numRows; i += 1) {
    for (let j = 1; j < ret[i - 1].length; j += 1) {
      ret[i][j] = ret[i - 1][j - 1] + ret[i - 1][j];
    }
  }
  return ret;
};