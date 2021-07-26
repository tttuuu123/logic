/* 
  给你一个整数数组 nums 和一个整数 target 。

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
  链接：https://leetcode-cn.com/problems/target-sum
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

  function dfs(i, sum) {
    if (i === nums.length) {
      if (sum === target) ret += 1;
      return;
    }
    dfs(i + 1, sum + nums[i]);
    dfs(i + 1, sum - nums[i]);
  }
};

/**
 * 上述暴力方法性能太差
 * 用记忆划优化
 * 但还是得看测试数据具体是什么样，题目样例这种就很合适
 */
var findTargetSumWays = function(nums, target) {
  const map = {}
  return dfs(0, 0);

  function dfs(i, sum) {
    if (i === nums.length) {
      return sum === target;
    }
    if (map?.[i]?.[sum]) return map[i][sum];
    let ret = 0;
    ret += dfs(i + 1, sum + nums[i]);
    ret += dfs(i + 1, sum - nums[i]);
    if (!map[i]) map[i] = {};
    map[i][sum] = ret;
    return ret;
  }
};