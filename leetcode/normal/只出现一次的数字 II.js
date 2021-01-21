/* 
  给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。

  说明：

  你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

  示例 1:

  输入: [2,2,3,2]
  输出: 3
  示例 2:

  输入: [0,1,0,1,0,1,99]
  输出: 99

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/single-number-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let ret = 0;
  for (let i = 0; i < 32; i += 1) {
    let pos = 1 << i;
    let sum = 0;
    for (let j = 0; j < nums.length; j += 1) {
      if ((nums[j] & pos) !== 0) {
        sum += 1;
      }
    }
    if (sum % 3 === 1) {
      ret |= pos;
    }
  }
  return ret;
};

/**
 * 将nums中的每一个数字转为32位二进制数
 * 则除了出现一次的数，其他数的二进制数的每一位的和必然为3N
 * 而再算上出现一次的数的二进制数的每一位（0或1）
 * 若为0，则不必考虑
 * 若为1，则这一位记录为1
 * 最终记录下的二进制数就是结果
 */