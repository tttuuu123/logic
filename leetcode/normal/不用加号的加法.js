/* 
  设计一个函数把两个数字相加。不得使用 + 或者其他算术运算符。

  示例:

  输入: a = 1, b = 1
  输出: 2
   
  提示：

  a, b 均可能是负数或 0
  结果不会溢出 32 位整数

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/add-without-plus-lcci
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
  let sum = 0;
  let carry = 0;
  while (b !== 0) {
    sum = a ^ b;
    carry = (a & b) << 1;
    a = sum;
    b = carry;
  }
  return a;
};

/**
 * a ^ b:
 * 0 ^ 0 = 0
 * 1 ^ 0 = 1
 * 0 ^ 1 = 1
 * 1 ^ 1 = 0 (carry = 1)
 * 所以 ^ 就可以得到无carry位的部分
 * 
 * a & b:
 * 0 & 0 = 0
 * 0 & 1 = 0
 * 1 & 0 = 0
 * 1 & 1 = 1 (carry = 1)
 * 所以 a & b 可以得到carry部分（但是这个carry位要进一位，所以 (a & b) << 1）
 * 
 * 所以 a + b = (a 和 b的无carry位结果) + (a 和 b的有carry位结果)
 * 
 * 然后这样每一次操作都可能会产生新的进位，所以每次循环直到进位为0
 */