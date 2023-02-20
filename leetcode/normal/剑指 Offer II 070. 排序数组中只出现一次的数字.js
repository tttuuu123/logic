/* 
  给定一个只包含整数的有序数组 nums ，每个元素都会出现两次，唯有一个数只会出现一次，请找出这个唯一的数字。

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
  链接：https://leetcode.cn/problems/skFtm2
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
 * 利用异或的特性
 * 1、0和任何数异或 等于 任何数本身
 * 2、任何数异或自身等于
 * 时间复杂度是O(n) 空间复杂度O(1)
 */

var singleNonDuplicate = function(nums) {
  let l = 0, r = (nums.length >> 1) - 1;
  let ret = null;
  while (l <= r) {
    const mid = (l + r) >> 1;
    if (nums[mid * 2] === nums[mid * 2 + 1]) {
      l = mid + 1;
    } else {
      ret = mid * 2;
      r = mid - 1;
    }
  }
  // [1,1,2,2,3]这样的奇数个数据，初始化r=1，即最后一位不会进入判断，如果ret不存在，一定是最后一位
  return ret === null ? nums[nums.length - 1] : nums[ret];
};

/**
 * 要求O(log n)的时间复杂度，想到二分
 * 并且如果每个元素出现2次，那么偶数位的后一位一定和自身相等
 * 且数组总数一定是奇数
 */

var singleNonDuplicate = function(nums) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    let mid = (l + r) >> 1;
    mid -= mid & 1;
    if (nums[mid] === nums[mid + 1]) {
      l = mid + 2;
    } else {
      r = mid ;
    }
  }
  return nums[l];
};

var singleNonDuplicate = function(nums) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    let mid = (l + r) >> 1;
    mid -= mid & 1;
    if (nums[mid] === nums[mid + 1]) {
      l = mid + 2;
    } else {
      r = mid - 1 ;
    }
  }
  return nums[l];
};

/**
 * 让mid永远是偶数
 * 如果mid是奇数，那么 mid & 1 = 1，否则 mid & 1 = 0，则 mid -= mid & 1 一定是偶数
 * 同时要注意 当 nums[mid] === nums[mid + 1] 成立时，l = mid + 2
 * 若l = mid + 1 必然会死循环
 */