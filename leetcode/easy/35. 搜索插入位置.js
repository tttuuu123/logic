/* 
  给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

  你可以假设数组中无重复元素。

  示例 1:

  输入: [1,3,5,6], 5
  输出: 2
  示例 2:

  输入: [1,3,5,6], 2
  输出: 1
  示例 3:

  输入: [1,3,5,6], 7
  输出: 4
  示例 4:

  输入: [1,3,5,6], 0
  输出: 0


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/search-insert-position
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let mid;
  while (l <= r) {
    mid = (l + r) >> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l;
};

/**
 * 二分查找有一个骚操作
 * 当r - l > 3时，用一次遍历
 * 可以避免（新手期）出现的死循环
 */
var searchInsert = function(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let mid;
  while (r - l > 3) {
    mid = (l + r) >> 1;
    if (nums[mid] >= target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  for (let i = l; i <= r; i += 1) {
    if (nums[i] >= target) return i;
  }
  return nums.length;
};