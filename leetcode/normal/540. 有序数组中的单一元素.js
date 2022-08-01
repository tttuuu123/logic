/* 
  给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。

  请你找出并返回只出现一次的那个数。

  你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。

   

  示例 1:

  输入: nums = [1,1,2,3,3,4,4,8,8]
  输出: 2
  示例 2:

  输入: nums =  [3,3,7,7,10,11,11]
  输出: 10
   

  提示:

  1 <= nums.length <= 105
  0 <= nums[i] <= 105


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/single-element-in-a-sorted-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  return nums.reduce((ret, num) => ret ^ num, 0);
};

/**
 * 这样时间复杂度是O(N)
 * 可以考虑用二分加速
 */

var singleNonDuplicate = function(nums) {
  let l = 0;
  let r = nums.length >>> 1;
  while (l <= r) {
    const mid = (l + r) >>> 1;
    if (nums[mid * 2] === nums[mid * 2 + 1]) {
      l = mid + 1;
    } else if (nums[mid * 2] !== nums[mid * 2 - 1]) {
      return nums[mid * 2];
    } else {
      r = mid - 1;
    }
  }
};

/**
 * 取偶数位的下标
 * 那么目标元素（下标2n
 * 左侧所有元素一定满足arr[l] === arr[l + 1]
 * 右侧所有元素一定满足arr[l] !== arr[l + 1]
 */