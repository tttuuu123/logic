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

  你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/* 给定长度的数组的最大值 */
// var maxSlidingWindow = function(nums, k) {
//   let sum = 0;
//   for (let i = 0; i < k; i += 1) {
//     sum += nums[i];
//   }
//   let max = sum;
//   for(let i = k; i < nums.length; i += 1) {
//     sum += - nums[i - k] + nums[i];
//     max = Math.max(max, sum);
//   }
//   return max;
// };

var maxSlidingWindow = function(nums, k) {
  if (k === 0) return [];
  const result = [];
  const queue = []
  for (let i = 0; i < k; i += 1) {
    queue.push(nums[i]);
  }
  result.push(Math.max(...queue));
  for(let i = k; i < nums.length; i += 1) {
    queue.shift();
    queue.push(nums[i]);
    result.push(Math.max(...queue));
  }
  return result;
};