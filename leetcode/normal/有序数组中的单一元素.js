/* 
  给定一个只包含整数的有序数组，每个元素都会出现两次，唯有一个数只会出现一次，找出这个数。

  示例 1:

  输入: [1,1,2,3,3,4,4,8,8]
  输出: 2
  示例 2:

  输入: [3,3,7,7,10,11,11]
  输出: 10
  注意: 您的方案应该在 O(log n)时间复杂度和 O(1)空间复杂度中运行。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/single-element-in-a-sorted-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  return nums.reduce((ret, num) => ret ^ num);
};

/**
 * 位运算好理解，但是时间复杂度是O(n)
 * x ^ x = 0;
 * x ^ 0 = x
 */

var singleNonDuplicate = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left < right) {
    mid = (left + right) >> 1;
    if (mid % 2 === 1) mid -= 1;
    if (nums[mid] == nums[mid + 1]) {
      left = mid + 2;
    } else {
      right = mid;
    }
  }
  return nums[left];
};

/**
 * 因为是有序数组，所以只需要对偶数位下标进行二分搜索
 * 每个下标与其后一位应该是相同的，否则就是要找的
 * 首先确保mid是偶数
 * 若 mid 和 mid + 1 相同，说明要找的数还在后面
 * 否则说明要找的数在mid前或就是mid
 * 若left === right，说明当前查找的元素集合只有一个了，这个元素就是结果
 */
