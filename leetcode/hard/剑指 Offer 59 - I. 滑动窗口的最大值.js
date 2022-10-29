/* 
  给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

  示例:

  输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
  输出: [3,3,5,5,6,7] 
  解释: 

    滑动窗口的位置                最大值
  ---------------               -----
  [1  3  -1] -3  5  3  6  7       3
  1 [3  -1  -3] 5  3  6  7       3
  1  3 [-1  -3  5] 3  6  7       5
  1  3  -1 [-3  5  3] 6  7       5
  1  3  -1  -3 [5  3  6] 7       6
  1  3  -1  -3  5 [3  6  7]      7
   

  提示：

  你可以假设 k 总是有效的，在输入数组 不为空 的情况下，1 ≤ k ≤ nums.length。

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0 || k === 0) return [];
  const ret = [];
  // 单调队列存储区间最值的下标
  const queue = [];
  for (let i = 0; i < nums.length; i += 1) {
    while (queue.length && i - queue[0] >= k) queue.shift();
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) queue.pop();
    queue.push(i);
    if (i >= k - 1) {
      ret.push(nums[queue[0]]);
    }
  }
  return ret;
};