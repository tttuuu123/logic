/* 
  给定一个正整数数组 nums和整数 k ，请找出该数组内乘积小于 k 的连续的子数组的个数。

  示例 1:

  输入: nums = [10,5,2,6], k = 100
  输出: 8
  解释: 8 个乘积小于 100 的子数组分别为: [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6]。
  需要注意的是 [10,5,2] 并不是乘积小于100的子数组。
  示例 2:

  输入: nums = [1,2,3], k = 0
  输出: 0
   

  提示: 

  1 <= nums.length <= 3 * 104
  1 <= nums[i] <= 1000
  0 <= k <= 106


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/ZVAVXX
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  let ret = 0;
  for (let i = 0; i < nums.length; i += 1) {
    let temp = 1;
    for (let j = i; j < nums.length; j += 1) {
      temp *= nums[j];
      if (temp < k) {
        ret += 1;
      } else {
        break;
      }
    }
  }
  return ret;
};

/**
 * 如果某个区间[i, ..., j]的乘积小于 k
 * 那么说明这个区间以j结尾的子数组的乘积都小于 k
 * 即有 j - i + 1个
 */

var numSubarrayProductLessThanK = function(nums, k) {
  let ret = 0;
  let i = 0, j = 0;
  let temp = 1;
  for (; j < nums.length; j += 1) {
    temp *= nums[j];
    while (i <= j && temp >= k) {
      temp /= nums[i];
      i += 1;
    }
    ret += j - i + 1;
  }
  return ret;
};