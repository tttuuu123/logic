/* 
  给定一个正整数数组 nums 和一个整数 target 。

  向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：

  例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
  返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。

  示例 1：

  输入：nums = [1,1,1,1,1], target = 3
  输出：5
  解释：一共有 5 种方法让最终目标和为 3 。
  -1 + 1 + 1 + 1 + 1 = 3
  +1 - 1 + 1 + 1 + 1 = 3
  +1 + 1 - 1 + 1 + 1 = 3
  +1 + 1 + 1 - 1 + 1 = 3
  +1 + 1 + 1 + 1 - 1 = 3
  示例 2：

  输入：nums = [1], target = 1
  输出：1
   

  提示：

  1 <= nums.length <= 20
  0 <= nums[i] <= 1000
  0 <= sum(nums[i]) <= 1000
  -1000 <= target <= 1000


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/YaVDxD
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  let ret = 0;
  dfs(0, 0);
  return ret;

  function dfs(start, sum) {
    if (start === nums.length) {
      if (sum === target) ret += 1;
      return;
    }
    dfs(start + 1, sum + nums[start]);
    dfs(start + 1, sum - nums[start]);
  }
};


var findTargetSumWays = function(nums, target) {
  target = Math.abs(target);
  const sum = nums.reduce((sum, num) => sum += num, target);
  if (sum & 1) return 0;
  target = sum / 2;
  const dp = Array(nums.length + 1).fill(0).map(() => Array(target + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= nums.length; i += 1) {
    for (let j = 0; j <= target; j += 1) {
      dp[i][j] = dp[i - 1][j];
      if (nums[i - 1] <= j) {
        dp[i][j] += dp[i - 1][j - nums[i - 1]];
      }
    }
  }
  return dp[nums.length][target];
};

/**
 * 令target始终为非负数，sum 为 nums中数字总和
 * 那么题目就可以转换为分割子集，使得2个子集和都是（sum + target) / 2
 * dp[i][j] = dp[i - 1][j - nums[i - 1]] + dp[i - 1][j]
 */

var findTargetSumWays = function(nums, target) {
  target = Math.abs(target);
  const sum = nums.reduce((sum, num) => sum += num, target);
  if (sum & 1) return 0;
  target = sum / 2;
  const dp = Array(target + 1).fill(0);
  dp[0] = 1;
  for (const num of nums) {
    for (let j = target; j >= num; j -= 1) {
      dp[j] += dp[j - num];
    }
  }
  return dp[target];
};

/**
 * 滚动数组优化
 */