/* 
  统计一个数字在排序数组中出现的次数。

  示例 1:

  输入: nums = [5,7,7,8,8,10], target = 8
  输出: 2
  示例 2:

  输入: nums = [5,7,7,8,8,10], target = 6
  输出: 0
   

  限制：

  0 <= 数组长度 <= 50000

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  let temp;
  while (left <= right) {
    mid = (left + right) >> 1;
    temp = nums[mid];
    if (temp === target) {
      left = mid;
      break;
    } else if (temp > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (nums[left] !== target) return 0;
  let count = 1;
  temp = left;
  while (nums[--temp] === target) count++;
  temp = left;
  while (nums[++temp] === target) count++;
  return count;
};