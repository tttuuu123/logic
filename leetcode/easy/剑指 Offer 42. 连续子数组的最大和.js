/* 
  输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

  要求时间复杂度为O(n)。


  示例1:

  输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
  输出: 6
  解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
   

  提示：

  1 <= arr.length <= 10^5
  -100 <= arr[i] <= 100

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const dp = [nums[0]];
  let ret = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    ret = Math.max(ret, dp[i]);
  }
  return ret;
};

/**
 * dp[n] 代表以 n为结尾的连续子数组最大和
 */

 var maxSubArray = function(nums) {
  let prefix = 0;
  let ret = 0;
  for (const num of nums) {
    prefix += num;
    ret = Math.max(prefix, ret);
    if (prefix < 0) prefix = 0;
  }
  return ret;
};

/**
 * 用前缀和也可以，当前缀和小于0，就重新开始算前缀和
 */
