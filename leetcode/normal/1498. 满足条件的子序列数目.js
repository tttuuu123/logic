/* 
  给你一个整数数组 nums 和一个整数 target 。

  请你统计并返回 nums 中能满足其最小元素与最大元素的 和 小于或等于 target 的 非空 子序列的数目。

  由于答案可能很大，请将结果对 109 + 7 取余后返回。

  示例 1：

  输入：nums = [3,5,6,7], target = 9
  输出：4
  解释：有 4 个子序列满足该条件。
  [3] -> 最小元素 + 最大元素 <= target (3 + 3 <= 9)
  [3,5] -> (3 + 5 <= 9)
  [3,5,6] -> (3 + 6 <= 9)
  [3,6] -> (3 + 6 <= 9)
  示例 2：

  输入：nums = [3,3,6,8], target = 10
  输出：6
  解释：有 6 个子序列满足该条件。（nums 中可以有重复数字）
  [3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]
  示例 3：

  输入：nums = [2,3,3,4,6,7], target = 12
  输出：61
  解释：共有 63 个非空子序列，其中 2 个不满足条件（[6,7], [7]）
  有效序列总数为（63 - 2 = 61）
   

  提示：

  1 <= nums.length <= 105
  1 <= nums[i] <= 106
  1 <= target <= 106

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/number-of-subsequences-that-satisfy-the-given-sum-condition
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
  nums.sort((a, b) => a - b);
  if (nums[0] > target) return 0; 
  const MOD = 1e9 + 7;
  let ret = 0;
  const dp = Array(nums.length).fill(0);
  dp[0] = 1;
  for (let i = 1; i < nums.length; i += 1) {
    dp[i] = dp[i - 1] * 2 % MOD;
  }
  let l = 0;
  let r = nums.length - 1;
  while (nums[r] >= target) r -= 1;
  while (l <= r) {
    if (nums[l] + nums[r] <= target) {
      ret = (ret + dp[r - l]) % MOD;
      l += 1;
    } else {
      r -= 1;
    }
  }
  return ret;
};

/**
 * 先枚举以每个下标开头到数组尾区间（[i, nums.length - 1]）的排列组合数(2^(n-1))
 * 用双指针遍历排序后的nums
 */

