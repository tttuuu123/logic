/* 
  给你一个整数数组 nums 和一个整数 x 。每一次操作时，你应当移除数组 nums 最左边或最右边的元素，然后从 x 中减去该元素的值。请注意，需要 修改 数组以供接下来的操作使用。

  如果可以将 x 恰好 减到 0 ，返回 最小操作数 ；否则，返回 -1 。

  示例 1：

  输入：nums = [1,1,4,2,3], x = 5
  输出：2
  解释：最佳解决方案是移除后两个元素，将 x 减到 0 。
  示例 2：

  输入：nums = [5,6,7,8,9], x = 4
  输出：-1
  示例 3：

  输入：nums = [3,2,20,1,1,3], x = 10
  输出：5
  解释：最佳解决方案是移除后三个元素和前两个元素（总共 5 次操作），将 x 减到 0 。

  提示：

  1 <= nums.length <= 105
  1 <= nums[i] <= 104
  1 <= x <= 109

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/minimum-operations-to-reduce-x-to-zero
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
  const lPrefixSum = [0];
  const rPrefixSum = [0];
  for (let i = 0; i < nums.length; i += 1) lPrefixSum[i + 1] = lPrefixSum[i] + nums[i];
  for (let i = nums.length - 1; i >= 0; i -= 1) rPrefixSum[nums.length - i] = rPrefixSum[nums.length - i - 1] + nums[i];
  let ret = -1;
  for (let i = 0; i < lPrefixSum.length; i += 1) {
    const j = binarySearch(rPrefixSum, x - lPrefixSum[i]);
    if (j === -1) continue;
    // 使用元素数量大于nums最大数量
    if (i + j > nums.length) continue;
    if (ret === -1 || ret > i + j) ret = i + j;
  }
  return ret;
};

function binarySearch(nums, x) {
  let l = 0;
  let r = nums.length - 1;
  let mid;
  while (l <= r) {
    mid = (l + r) >> 1;
    if (nums[mid] === x) return mid;
    if (nums[mid] < x) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}

/**
 * 本质是从nums的左右各选一部分数字，使其和为x
 * 可以分别对左右部分维护一个前缀和数组，且因为数字都大于0，所以2各前缀和数组必然单调递增
 */