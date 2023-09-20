/* 
  给你一个整数数组 nums，返回 nums 中最长等差子序列的长度。

  回想一下，nums 的子序列是一个列表 nums[i1], nums[i2], ..., nums[ik] ，且 0 <= i1 < i2 < ... < ik <= nums.length - 1。并且如果 seq[i+1] - seq[i]( 0 <= i < seq.length - 1) 的值都相同，那么序列 seq 是等差的。


  示例 1：

  输入：nums = [3,6,9,12]
  输出：4
  解释： 
  整个数组是公差为 3 的等差数列。
  示例 2：

  输入：nums = [9,4,7,2,10]
  输出：3
  解释：
  最长的等差子序列是 [4,7,10]。
  示例 3：

  输入：nums = [20,1,15,3,10,5,8]
  输出：4
  解释：
  最长的等差子序列是 [20,15,10,5]。
  

  提示：

  2 <= nums.length <= 1000
  0 <= nums[i] <= 500
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
  const dp = Array(nums.length).fill(0).map(() => Array(1001).fill(1));
  let max = 0;
  for (let i = 1; i < nums.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      // +500 是因为 nums[i]范围是[0, 500]，所以最大差值就是500，保证下标为正
      const diff = nums[i] - nums[j] + 500;
      dp[i][diff] = Math.max(dp[i][diff], dp[j][diff] + 1);
      max = Math.max(max, dp[i][diff]);
    }
  }
  return max;
};
