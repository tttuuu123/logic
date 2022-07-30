/* 
  给你两个正整数数组 nums1 和 nums2 ，数组的长度都是 n 。

  数组 nums1 和 nums2 的 绝对差值和 定义为所有 |nums1[i] - nums2[i]|（0 <= i < n）的 总和（下标从 0 开始）。

  你可以选用 nums1 中的 任意一个 元素来替换 nums1 中的 至多 一个元素，以 最小化 绝对差值和。

  在替换数组 nums1 中最多一个元素 之后 ，返回最小绝对差值和。因为答案可能很大，所以需要对 109 + 7 取余 后返回。

  |x| 定义为：

  如果 x >= 0 ，值为 x ，或者
  如果 x <= 0 ，值为 -x

  示例 1：

  输入：nums1 = [1,7,5], nums2 = [2,3,5]
  输出：3
  解释：有两种可能的最优方案：
  - 将第二个元素替换为第一个元素：[1,7,5] => [1,1,5] ，或者
  - 将第二个元素替换为第三个元素：[1,7,5] => [1,5,5]
  两种方案的绝对差值和都是 |1-2| + (|1-3| 或者 |5-3|) + |5-5| = 3
  示例 2：

  输入：nums1 = [2,4,6,8,10], nums2 = [2,4,6,8,10]
  输出：0
  解释：nums1 和 nums2 相等，所以不用替换元素。绝对差值和为 0
  示例 3：

  输入：nums1 = [1,10,4,4,2,7], nums2 = [9,3,5,1,7,4]
  输出：20
  解释：将第一个元素替换为第二个元素：[1,10,4,4,2,7] => [10,10,4,4,2,7]
  绝对差值和为 |10-9| + |10-3| + |4-5| + |4-1| + |2-7| + |7-4| = 20
   

  提示：

  n == nums1.length
  n == nums2.length
  1 <= n <= 105
  1 <= nums1[i], nums2[i] <= 105

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/minimum-absolute-sum-difference
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function(nums1, nums2) {
  const mod = 1e9 + 7;
  const arr = [...nums1];
  arr.sort((a, b) => a - b);
  let max = 0;
  let sum = 0;
  for (let i = 0; i < nums1.length; i += 1) {
    const diff = Math.abs(nums1[i] - nums2[i]);
    sum = (sum + diff) % mod;
    max = Math.max(max, diff - binarySearch(arr, nums2[i]));
  }
  return (sum - max + mod) % mod;

  function binarySearch(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
      const mid = (l + r) >>> 1;
      if (arr[mid] < target) {
        l = mid + 1;
      } else if (arr[mid] > target) {
        r = mid - 1
      } else {
        return 0;
      }
    }
    if (l === 0) return Math.abs(arr[l] - target);
    if (l < arr.length) return Math.min(Math.abs(arr[l] - target), Math.abs(arr[l - 1] - target));
    return Math.abs(arr[l - 1] - target);
  }
};

/**
 * [5,4,7]
 * [10,8,10]
 * 此时l会为3（超过arr最大值）
 * 所以二分结果要分3种场景讨论
 * 1、l正好为0
 * 2、l在[0, arr.length - 1]区间内
 * 3、l为arr.length
 */