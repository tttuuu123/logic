/* 
  已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。

  在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转 ，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。

  给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。

  示例 1：

  输入：nums = [2,5,6,0,0,1,2], target = 0
  输出：true
  示例 2：

  输入：nums = [2,5,6,0,0,1,2], target = 3
  输出：false
   

  提示：

  1 <= nums.length <= 5000
  -104 <= nums[i] <= 104
  题目数据保证 nums 在预先未知的某个下标上进行了旋转
  -104 <= target <= 104

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  // 两边有值等于x
  if (nums[0] === target || nums[nums.length - 1] === target) return true;
  // 两边值不等于x
  let l = 0;
  let r = nums.length - 1;
  // 将两头相同值去掉，保证下标l的值大于下标r的值
  while (l < nums.length && nums[l] === nums[0]) l += 1;
  while (r >= 0 && nums[r] === nums[0]) r -= 1;
  const lVal = nums[l];
  const rVal = nums[r];
  while (l <= r) {
    const mid = (l + r) >> 1;
    if (nums[mid] === target) return mid;
    if (nums[mid] <= rVal) {
      if (target <= rVal && target > nums[mid]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    } else {
      if (target >= lVal && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }
  return false;
};

