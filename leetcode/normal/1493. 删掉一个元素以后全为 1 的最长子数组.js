/* 
  给你一个二进制数组 nums ，你需要从中删掉一个元素。

  请你在删掉元素的结果数组中，返回最长的且只包含 1 的非空子数组的长度。

  如果不存在这样的子数组，请返回 0 。

  提示 1：

  输入：nums = [1,1,0,1]
  输出：3
  解释：删掉位置 2 的数后，[1,1,1] 包含 3 个 1 。
  示例 2：

  输入：nums = [0,1,1,1,0,1,1,0,1]
  输出：5
  解释：删掉位置 4 的数字后，[0,1,1,1,1,1,0,1] 的最长全 1 子数组为 [1,1,1,1,1] 。
  示例 3：

  输入：nums = [1,1,1]
  输出：2
  解释：你必须要删除一个元素。
   

  提示：

  1 <= nums.length <= 105
  nums[i] 要么是 0 要么是 1 。

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/longest-subarray-of-1s-after-deleting-one-element
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  let canUse0 = true;
  const queue = [];
  let max = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      if (canUse0) {
        canUse0 = false;
      } else {
        while (queue.shift() === 1) {};
      }
    }
    queue.push(nums[i]);
    max = Math.max(max, queue.length - (canUse0 ? 0 : 1));
  }
  if (canUse0) max -= 1;
  return max;
};