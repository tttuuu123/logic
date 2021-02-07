/* 
  给定一个32位整数 num，你可以将一个数位从0变为1。请编写一个程序，找出你能够获得的最长的一串1的长度。

  示例 1：

  输入: num = 1775(110111011112)
  输出: 8
  示例 2：

  输入: num = 7(01112)
  输出: 4

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/reverse-bits-lcci
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} num
 * @return {number}
 */
var reverseBits = function(num) {
  let max = 0;
  let preLen = 0;
  let curLen = 0;
  while (num) {
    if (num & 1) {
      curLen += 1;
    } else {
      max = Math.max(max, curLen + preLen + 1);
      preLen = curLen;
      curLen = 0;
    }
    num >>>= 1;
  }
  max = Math.max(max, curLen + preLen + 1);
  return max <= 32 ? max : 32;
};
