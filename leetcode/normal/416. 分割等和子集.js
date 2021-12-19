/* 
  给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

  示例 1：

  输入：nums = [1,5,11,5]
  输出：true
  解释：数组可以分割成 [1, 5, 5] 和 [11] 。
  示例 2：

  输入：nums = [1,2,3,5]
  输出：false
  解释：数组不能分割成两个元素和相等的子集。

  提示：

  1 <= nums.length <= 200
  1 <= nums[i] <= 100

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/partition-equal-subset-sum
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = nums.reduce((count, num) => count += num, 0);
  if (sum & 1) return false;
  const target = sum / 2;
  const dp = Array(sum + 1).fill(0);
  dp[0] = 1;
  for (const num of nums) {
    for (let j = target; j >= num; j--) {
      dp[j] |= dp[j - num];
    }
  }
  return dp[target];
};

/**
 * nums的合为sum，目标就是从nums中找出一些数字，使其和为sum/2
 * f[i][j] 为 前i 个数字，能否凑出 j 值，能则为1，不能则为0
 * f[i][j] = f[i - 1][j] | f[i - 1][j - nums[i]]
 */
