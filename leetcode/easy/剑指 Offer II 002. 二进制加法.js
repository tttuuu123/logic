/* 
  给定两个 01 字符串 a 和 b ，请计算它们的和，并以二进制字符串的形式输出。

  输入为 非空 字符串且只包含数字 1 和 0。

  示例 1:

  输入: a = "11", b = "10"
  输出: "101"
  示例 2:

  输入: a = "1010", b = "1011"
  输出: "10101"
   

  提示：

  每个字符串仅由字符 '0' 或 '1' 组成。
  1 <= a.length, b.length <= 10^4
  字符串如果不是 "0" ，就都不含前导零。


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/JFETK5
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  const arr = [];
  let carry = 0;
  while (i >= 0 || j >= 0) {
    const a1 = i >= 0 ? +a[i] : 0;
    const b1 = j >= 0 ? +b[j] : 0;
    i -= 1;
    j -= 1;
    const cnt = a1 + b1 + carry;
    const cur = cnt % 2;
    carry = ~~(cnt / 2);
    arr.push(cur);
  }
  if (carry) arr.push(1);
  return arr.reverse().join('');
};