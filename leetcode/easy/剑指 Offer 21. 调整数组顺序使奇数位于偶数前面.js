/* 
  输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。

  示例：

  输入：nums = [1,2,3,4]
  输出：[1,3,2,4] 
  注：[3,1,2,4] 也是正确的答案之一。
   

  提示：

  0 <= nums.length <= 50000
  0 <= nums[i] <= 10000

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    while (nums[i] % 2 === 1) i += 1;
    while (nums[j] % 2 === 0) j -= 1;
    if (i < j) [nums[i], nums[j]] = [nums[j], nums[i]];
    i += 1;
    j -= 1;
  }
  return nums;
};