/* 
  给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

  如果数组中不存在目标值 target，返回 [-1, -1]。

  进阶：

  你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？

  示例 1：

  输入：nums = [5,7,7,8,8,10], target = 8
  输出：[3,4]
  示例 2：

  输入：nums = [5,7,7,8,8,10], target = 6
  输出：[-1,-1]
  示例 3：

  输入：nums = [], target = 0
  输出：[-1,-1]
   
  提示：

  0 <= nums.length <= 105
  -109 <= nums[i] <= 109
  nums 是一个非递减数组
  -109 <= target <= 109


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length === 0) return [-1, -1];
  let left = 0;
  let right = nums.length - 1;
  let mid;
  if (target < nums[left] || target > nums[right]) return[-1, -1];
  while (left <= right) {
    mid = (left + right) >> 1;
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      let temp = mid;
      while (nums[mid - 1] === nums[mid]) {
        mid -= 1;
      }
      while (nums[temp + 1] === nums[temp]) {
        temp += 1;
      }
      return [mid, temp];
    }
  }
  return [-1, -1];
};




/**
 * 泛化成二分的0｜1模型问题
 */
function binarySearch(nums, target) {
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
}

var searchRange = function(nums, target) {
  const ret = [];
  ret[0] = binarySearch(nums, target);
  // 不存在target
  if (ret[0] === nums.length || nums[ret[0]] !== target) return [-1, -1];
  // 存在target
  ret[1] = binarySearch(nums, target + 1) - 1;
  return ret;
}