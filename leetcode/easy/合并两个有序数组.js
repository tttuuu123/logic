/* 
  给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

  说明：

  初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
  你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
   

  示例：

  输入：
  nums1 = [1,2,3,0,0,0], m = 3
  nums2 = [2,5,6],       n = 3

  输出：[1,2,2,3,5,6]
   

  提示：

  -10^9 <= nums1[i], nums2[i] <= 10^9
  nums1.length == m + n
  nums2.length == n

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/merge-sorted-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let end = m + n - 1;
  while (j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[end] = nums1[i];
      i -= 1;
    } else {
      nums1[end] = nums2[j];
      j -= 1;
    }
    end -= 1;
  }
};
