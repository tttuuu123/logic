/* 
  给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

  相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。

   

  例如，给定三角形：

  [
       [2],
      [3,4],
     [6,5,7],
    [4,1,8,3]
  ]
  自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/triangle
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const result = [triangle[0]];
  for (let i = 1, il = triangle.length; i < il; i += 1) {
    result[i] = [];
    for (let j = 0, jl = triangle[i].length; j < jl; j += 1) {
      result[i][j] = Math.min(result[i - 1][j - 1] !== undefined ? result[i - 1][j - 1] : Infinity, result[i - 1][j] !== undefined ? result[i - 1][j] : Infinity) + triangle[i][j];
    }
  }
  return Math.min(...result[triangle.length - 1]);
};

/* 
  f(i, j) = min(f(i - 1, j - 1) || Infinity, f(i - 1, j) || Infinity) + val(i, j)
  数组中可能有负数
*/