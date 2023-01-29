/* 
  我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。

  示例:

  输入: n = 10
  输出: 12
  解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
  说明:  

  1 是丑数。
  n 不超过1690。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/chou-shu-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let i = 1;
  let a = 0, b = 0, c = 0;
  const arr = [1];
  while (i++ < n) {
    const x2 = arr[a] * 2;
    const x3 = arr[b] * 3;
    const x5 = arr[c] * 5;
    arr.push(Math.min(x2, x3, x5));
    if (arr[arr.length - 1] === x2) a += 1;
    if (arr[arr.length - 1] === x3) b += 1;
    if (arr[arr.length - 1] === x5) c += 1;
  }
  return arr[n - 1];
};