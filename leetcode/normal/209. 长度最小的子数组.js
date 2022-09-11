/* 
  给定一个含有 n 个正整数的数组和一个正整数 target 。

  找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

  示例 1：

  输入：target = 7, nums = [2,3,1,2,4,3]
  输出：2
  解释：子数组 [4,3] 是该条件下的长度最小的子数组。
  示例 2：

  输入：target = 4, nums = [1,4,4]
  输出：1
  示例 3：

  输入：target = 11, nums = [1,1,1,1,1,1,1,1]
  输出：0
   

  提示：

  1 <= target <= 109
  1 <= nums.length <= 105
  1 <= nums[i] <= 105


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/minimum-size-subarray-sum
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let ret = Infinity;
  for (let i = 0, j = 0, count = 0; i < nums.length; i += 1) {
    count += nums[i];
    while (count >= target) {
      ret = Math.min(i - j + 1, ret);
      count -= nums[j];
      j += 1;
    }
  }
  return ret === Infinity ? 0 : ret;
};

var minSubArrayLen = function(target, nums) {
  let ret = Infinity;
  let i = 0, j = 0;
  let count = 0;
  while (i < nums.length) {
    count += nums[i];
    while (count >= target) {
      ret = Math.min(ret, i - j + 1);
      count -= nums[j];
      j += 1;
    }
    i += 1;
  }
  return ret === Infinity ? 0 : ret;
}
