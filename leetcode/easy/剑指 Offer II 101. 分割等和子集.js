/* 
  给定一个非空的正整数数组 nums ，请判断能否将这些数字分成元素和相等的两部分。


  示例 1：

  输入：nums = [1,5,11,5]
  输出：true
  解释：nums 可以分割成 [1, 5, 5] 和 [11] 。
  示例 2：

  输入：nums = [1,2,3,5]
  输出：false
  解释：nums 不可以分为和相等的两部分
   

  提示：

  1 <= nums.length <= 200
  1 <= nums[i] <= 100
   

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/NUPfPr
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const sum = nums.reduce((sum, num) => sum += num);
  if (sum & 1) return false;
  nums.sort((a, b) => a - b);
  const target = sum / 2;
  let l = 0, r = nums.length - 1;
  let lSum = 0, rSum = 0;
  while (l <= r) {
    if (lSum > target || rSum > target) return false;
    if (lSum === target || rSum === target) return true;
    if (lSum <= rSum) {
      lSum += +nums[l];
      l += 1;
    } else {
      rSum += +nums[r];
      r -= 1;
    }
  }
  return lSum === rSum
};

/**
 * 这种方法不正确
 * 例如[1, 1, 2, 2] 应该为true，但是上述方法结果为false
 */


var canPartition = function(nums) {
  const sum = nums.reduce((sum, num) => sum += num);
  if (sum & 1) return false;
  const target = sum / 2;
  const dp = Array(nums.length).fill(0).map(() => Array(target + 1).fill(false));
  for (let i = 0; i < nums.length;i += 1) {
    dp[i][0] = true;
  }
  dp[0][nums[0]] = true;
  for (let i = 1; i < nums.length; i += 1) {
    for (let j = 1; j <= target; j += 1) {
      if (j >= nums[i]) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[nums.length - 1][target];
};

/**
 * dp[i][j] 定义为 前i个元素中可以选出一部分元素，选出的元素和为j
 * 那么不选nums[i]
 * d[i][j] = dp[i - 1][j]
 * 选nums[i]
 * dp[i][j] = dp[i - 1][j - nums[i]]
 */

var canPartition = function(nums) {
  const sum = nums.reduce((sum, num) => sum += num);
  if (sum & 1) return false;
  const target = sum / 2;
  const dp = Array(target + 1).fill(false);
  dp[0] = true;
  if (nums[0] <= target) dp[nums[0]] = true;
  for (const num of nums) {
    for (let j = target; j >= num; j -= 1) {
      dp[j] = dp[j] || dp[j - num];
    }
  }
  return dp[target];
};

/**
 * 滚动数组优化
 */