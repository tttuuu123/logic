/* 
  统计一个数字在排序数组中出现的次数。

  示例 1:

  输入: nums = [5,7,7,8,8,10], target = 8
  输出: 2
  示例 2:

  输入: nums = [5,7,7,8,8,10], target = 6
  输出: 0
   

  提示：

  0 <= nums.length <= 105
  -109 <= nums[i] <= 109
  nums 是一个非递减数组
  -109 <= target <= 109

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let ret = 0;
  while (l <= r) {
    const mid = (l + r) >> 1;
    if (nums[mid] === target) {
      ret += 1;
      let temp = mid;
      while (nums[--temp] === nums[mid]) ret += 1;
      temp = mid;
      while (nums[++temp] === nums[mid]) ret += 1;
      break;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ret;
};