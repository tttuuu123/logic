/* 
  输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

  示例 1：

  输入：nums = [2,7,11,15], target = 9
  输出：[2,7] 或者 [7,2]
  示例 2：

  输入：nums = [10,26,30,31,47,60], target = 40
  输出：[10,30] 或者 [30,10]
   

  限制：

  1 <= nums.length <= 10^5
  1 <= nums[i] <= 10^6


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/he-wei-sde-liang-ge-shu-zi-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(target - num)) return [num, target - num];
    set.add(num);
  }
  return null;
};

var twoSum = function(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const sum = nums[l] + nums[r];
    if (sum === target) return [nums[l], nums[r]];
    if (sum < target) {
      l += 1;
    } else {
      r -= 1;
    }
  }
  return null;
};