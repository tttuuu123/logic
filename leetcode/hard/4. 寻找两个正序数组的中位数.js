/* 
  给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

  示例 1：

  输入：nums1 = [1,3], nums2 = [2]
  输出：2.00000
  解释：合并数组 = [1,2,3] ，中位数 2
  示例 2：

  输入：nums1 = [1,2], nums2 = [3,4]
  输出：2.50000
  解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
  示例 3：

  输入：nums1 = [0,0], nums2 = [0,0]
  输出：0.00000
  示例 4：

  输入：nums1 = [], nums2 = [1]
  输出：1.00000
  示例 5：

  输入：nums1 = [2], nums2 = []
  输出：2.00000
   

  提示：

  nums1.length == m
  nums2.length == n
  0 <= m <= 1000
  0 <= n <= 1000
  1 <= m + n <= 2000
  -106 <= nums1[i], nums2[i] <= 106


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const n = nums1.length;
  const m = nums2.length;
  let mid = Math.ceil((n + m) / 2);
  const a = find(nums1, nums2, 0, 0, mid);
  if ((n + m) % 2 === 1) return a;
  const b = find(nums1, nums2, 0, 0, mid + 1);
  return (a + b) / 2;
};

/**
 * 
 * @param {Array} nums1 
 * @param {Array} nums2 
 * @param {Number} i nums1从第i位开始查找
 * @param {Number} j nums2从第j位开始查找
 * @param {Number} target
 */
function find(nums1, nums2, i, j, target) {
  if (nums1.length === i) return nums2[j + target - 1]; // nums1中不存在，就直接在nums2中从下标j开始往后找target位，对应下标需要-1
  if (nums2.length === j) return nums1[i + target - 1];
  if (target === 1) return Math.min(nums1[i], nums2[j]);
  let a = Math.min(Math.ceil(target / 2), nums1.length - i); // 从nums1中取k / 2个数，如果nums1中不足k / 2个数，则取剩余所有的元素
  const b = Math.min(target - a, nums2.length - j); // 同理
  a = target - b; // 如果nums2中取的是nums2.length - j个数，则需要更新一下a （如果都能取k / 2个数，则次行也无影响）
  // 如果nums1中的第i + a - 1个数字 小于 nums2中第j + b - 1个数字，则target必然不会存在于nums1中第i到i + a - 1位之间，可以排除
  if (nums1[i + a - 1] <= nums2[j + b - 1]) {
    return find(nums1, nums2, i + a, j, target - a);
  }
  // 同理
  return find(nums1, nums2, i, j + b, target - b);
}
