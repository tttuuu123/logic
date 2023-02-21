/* 
  给定一个非负整数 x ，计算并返回 x 的平方根，即实现 int sqrt(int x) 函数。

  正数的平方根有两个，只输出其中的正数平方根。

  如果平方根不是整数，输出只保留整数的部分，小数部分将被舍去。


  示例 1:

  输入: x = 4
  输出: 2
  示例 2:

  输入: x = 8
  输出: 2
  解释: 8 的平方根是 2.82842...，由于小数部分将被舍去，所以返回 2
   

  提示:

  0 <= x <= 231 - 1


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/jJ0w9p
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x <= 1) return x;
  let l = 1, r = x;
  let ret;
  while (l < r) {
    // 当x = 2147483647，防止超限
    const mid = l + ((r - l) >> 1);
    if (BigInt(mid * mid) <= BigInt(x)) {
      ret = mid;
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return ret;
};

/**
 * 用二分加速暴力解
 */