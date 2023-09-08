/* 
  给你一个整数数组 nums ，你可以对它进行一些操作。

  每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除 所有 等于 nums[i] - 1 和 nums[i] + 1 的元素。

  开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。

  示例 1：

  输入：nums = [3,4,2]
  输出：6
  解释：
  删除 4 获得 4 个点数，因此 3 也被删除。
  之后，删除 2 获得 2 个点数。总共获得 6 个点数。
  示例 2：

  输入：nums = [2,2,3,3,3,4]
  输出：9
  解释：
  删除 3 获得 3 个点数，接着要删除两个 2 和 4 。
  之后，再次删除 3 获得 3 个点数，再次删除 3 获得 3 个点数。
  总共获得 9 个点数。
  

  提示：

  1 <= nums.length <= 2 * 104
  1 <= nums[i] <= 104
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  const arr = new Array(Math.max(...nums) + 1).fill(0);
  for (let i = 0; i < nums.length; i += 1) {
    arr[nums[i]] += nums[i];
  }
  const dp = Array(arr.length).fill(0);
  dp[0] = arr[0];
  dp[1] = Math.max(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i += 1) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
  }
  console.log(dp)
  return dp[arr.length - 1];
};

/**
 * 将题目条件中 删除 nums[i] - 1 和 nums[i] + 1 
 * 转为 删除 nums[i - 1] 和 nums[i + 1]
 * 那就是打家劫舍问题
 * 所以将 nums[i] 视为 数组中下标，那么不用 nums[i - 1] 和 nums[i + 1] 即可
 */