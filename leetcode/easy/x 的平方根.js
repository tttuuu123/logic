/* 
  实现 int sqrt(int x) 函数。

  计算并返回 x 的平方根，其中 x 是非负整数。

  由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

  示例 1:

  输入: 4
  输出: 2
  示例 2:

  输入: 8
  输出: 2
  说明: 8 的平方根是 2.82842..., 
       由于返回类型是整数，小数部分将被舍去。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/sqrtx
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 0;
  let right = x;
  let mid;
  let temp;
  let result;
  while (left <= right) {
    mid = (left + right) >> 1;
    temp = Math.pow(mid, 2);
    if (temp === x) {
      return mid;
    } else if (temp < x) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return mid;
};
x
/**
 * 要注意结果是向下取整，所以当最后一步走 temp > x 的逻辑时候，结果要减1
 * 也就是结果是每次走 temp <= x 的逻辑时候的mid
 */