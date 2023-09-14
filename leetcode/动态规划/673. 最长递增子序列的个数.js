/* 
  给定一个未排序的整数数组 nums ， 返回最长递增子序列的个数 。

  注意 这个数列必须是 严格 递增的。


  示例 1:

  输入: [1,3,5,4,7]
  输出: 2
  解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
  示例 2:

  输入: [2,2,2,2,2]
  输出: 5
  解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
  

  提示: 

  1 <= nums.length <= 2000
  -106 <= nums[i] <= 106
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  const dp = Array(nums.length).fill(1);
  const count = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) {
          count[i] = count[j];
        } else if (dp[j] + 1 === dp[i]) {
          count[i] += count[j];
        }
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  const max = Math.max(...dp);
  let ret = 0;
  for (let i = 0; i < dp.length; i += 1) {
    if (dp[i] === max) ret += count[i];
  }
  return ret;
};