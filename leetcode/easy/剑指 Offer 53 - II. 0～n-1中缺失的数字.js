/* 
  一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

  示例 1:

  输入: [0,1,3]
  输出: 2
  示例 2:

  输入: [0,1,2,3,4,5,6,7,9]
  输出: 8
   

  限制：

  1 <= 数组长度 <= 10000

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/que-shi-de-shu-zi-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const mid = (l + r) >> 1;
    if (mid === nums[mid]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l === nums.length - 1 ? nums.length : l;
};