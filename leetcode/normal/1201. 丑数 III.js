/* 
  给你四个整数：n 、a 、b 、c ，请你设计一个算法来找出第 n 个丑数。

  丑数是可以被 a 或 b 或 c 整除的 正整数 。

  示例 1：

  输入：n = 3, a = 2, b = 3, c = 5
  输出：4
  解释：丑数序列为 2, 3, 4, 5, 6, 8, 9, 10... 其中第 3 个是 4。
  示例 2：

  输入：n = 4, a = 2, b = 3, c = 4
  输出：6
  解释：丑数序列为 2, 3, 4, 6, 8, 9, 10, 12... 其中第 4 个是 6。
  示例 3：

  输入：n = 5, a = 2, b = 11, c = 13
  输出：10
  解释：丑数序列为 2, 4, 6, 8, 10, 11, 12, 13... 其中第 5 个是 10。
  示例 4：

  输入：n = 1000000000, a = 2, b = 217983653, c = 336916467
  输出：1999999984
   

  提示：

  1 <= n, a, b, c <= 10^9
  1 <= a * b * c <= 10^18
  本题结果在 [1, 2 * 10^9] 的范围内

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/ugly-number-iii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function(n, a, b, c) {
  let arr = [1];
  const set = new Set();
  let i = 1, j = 1, k = 1;
  while (set.size !== n) {
    const xa = a * i;
    const xb = b * j;
    const xc = c * k;
    const min = Math.min(xa, xb, xc);
    set.add(min);
    if (min === xa) {
      i += 1;
    } else if (min === xb) {
      j += 1;
    } else if (min === xc) {
      k += 1;
    }
  }
  return [...set][n - 1];
};

/**
 * 暴力求解，示例4就会发生set溢出
 */