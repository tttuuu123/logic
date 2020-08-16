/* 
  给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
   
  示例 1:

  输入: [2,3,-2,4]
  输出: 6
  解释: 子数组 [2,3] 有最大乘积 6。
  示例 2:

  输入: [-2,0,-1]
  输出: 0
  解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/maximum-product-subarray
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const max = [nums[0]];
  const min = [nums[0]];
  let temp;
  for (let i = 1; i < nums.length; i += 1) {
    temp = nums[i];
    max[i] = Math.max(temp, temp * max[i - 1], temp * min[i - 1]);
    min[i] = Math.min(temp, temp * max[i - 1], temp * min[i - 1]);
  }
  return Math.max(...max);
};

/**
 * 如果字串集中
 * 负数数量为个数，则结果为负数
 * 负数数量为偶数，则负负得正，结果为正数
 */

var maxProduct = function(nums) {
  let max = nums[0];
  let min = nums[0];
  let result = nums[0];
  let temp1;
  let temp2;
  for (let i = 1; i < nums.length; i += 1) {
    temp1 = max * nums[i];
    temp2 = min * nums[i];
    max = Math.max(nums[i], temp1, temp2);
    min = Math.min(nums[i], temp1, temp2);
    result = Math.max(result, max)
  }
  return result;
};

/**
 * 
 * 可以看到每一次结果只与上一次的max和min有关系，所以可以不用数组存储
 */