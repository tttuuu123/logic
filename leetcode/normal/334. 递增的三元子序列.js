/* 
  给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。

  如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k ，使得 nums[i] < nums[j] < nums[k] ，返回 true ；否则，返回 false 。
   

  示例 1：

  输入：nums = [1,2,3,4,5]
  输出：true
  解释：任何 i < j < k 的三元组都满足题意
  示例 2：

  输入：nums = [5,4,3,2,1]
  输出：false
  解释：不存在满足题意的三元组
  示例 3：

  输入：nums = [2,1,5,0,4,6]
  输出：true
  解释：三元组 (3, 4, 5) 满足题意，因为 nums[3] == 0 < nums[4] == 4 < nums[5] == 6
   

  提示：

  1 <= nums.length <= 5 * 105
  -231 <= nums[i] <= 231 - 1
   

  进阶：你能实现时间复杂度为 O(n) ，空间复杂度为 O(1) 的解决方案吗？

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/increasing-triplet-subsequence
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  const dp = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp) >= 3; 
};

/**
 * 其实就是找最长递增子序列长度是否大于3，动态规划
 * dp[n] = dp[j] + 1
 * j 为 n 之前所有满足 nums[n] > nums[j] 的最大的那个下标
 * 时间复杂度O(n^2)，不满足O(n)的要求
 */

var increasingTriplet = function(nums) {
  let fst = nums[0];
  let sec = Number.MAX_VALUE;
  for (let i = 1; i < nums.length; i += 1) {
    const num = nums[i];
    if (num > sec) return true;
    if (num > fst) {
      sec = num;
    } else {
      fst = num;
    }
  }
  return false;
};

/**
 * 贪心
 */