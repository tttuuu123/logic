/* 
  给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。


  示例 1：

  输入：nums = [2,2,3,2]
  输出：3
  示例 2：

  输入：nums = [0,1,0,1,0,1,100]
  输出：100
   

  提示：

  1 <= nums.length <= 3 * 104
  -231 <= nums[i] <= 231 - 1
  nums 中，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次
   

  进阶：你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/WGki4K
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const arr = Array(32).fill(0);
  for (const num of nums) {
    for (let i = 0; i < 32; i += 1) {
      arr[i] += (num >> (31 - i) & 1);
    }
  }
  let ret = 0;
  for (let i = 0; i < 32; i += 1) {
    ret  = (ret << 1) + arr[i] % 3;
  }
  return ret;
};