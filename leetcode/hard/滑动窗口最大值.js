/* 
  给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

  返回滑动窗口中的最大值。

  进阶：

  你能在线性时间复杂度内解决此题吗？

   

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

  1 <= nums.length <= 10^5
  -10^4 <= nums[i] <= 10^4
  1 <= k <= nums.length

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/sliding-window-maximum
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const idxQueue = [];
  const result = [];
  for (let i = 0; i < nums.length; i += 1) {
    if ((i - idxQueue[0]) >= k) idxQueue.shift();
    while (nums[idxQueue[idxQueue.length - 1]] <= nums[i]) {
      idxQueue.pop();
    }
    idxQueue.push(i);
    if (i >= k - 1) result.push(nums[idxQueue[0]]);
  }
  return result;
};

/**
 * 维护一个下标队列idxQueue，其下标对应nums中的值在队列中是递减的
 * 这样保证了idxQueue中对头下标在nums中的值是整个队列中最大的
 */