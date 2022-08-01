/* 
  元素的 频数 是该元素在一个数组中出现的次数。

  给你一个整数数组 nums 和一个整数 k 。在一步操作中，你可以选择 nums 的一个下标，并将该下标对应元素的值增加 1 。

  执行最多 k 次操作后，返回数组中最高频元素的 最大可能频数 。

  示例 1：

  输入：nums = [1,2,4], k = 5
  输出：3
  解释：对第一个元素执行 3 次递增操作，对第二个元素执 2 次递增操作，此时 nums = [4,4,4] 。
  4 是数组中最高频元素，频数是 3 。
  示例 2：

  输入：nums = [1,4,8,13], k = 5
  输出：2
  解释：存在多种最优解决方案：
  - 对第一个元素执行 3 次递增操作，此时 nums = [4,4,8,13] 。4 是数组中最高频元素，频数是 2 。
  - 对第二个元素执行 4 次递增操作，此时 nums = [1,8,8,13] 。8 是数组中最高频元素，频数是 2 。
  - 对第三个元素执行 5 次递增操作，此时 nums = [1,4,13,13] 。13 是数组中最高频元素，频数是 2 。
  示例 3：

  输入：nums = [3,9,6], k = 2
  输出：1
   

  提示：

  1 <= nums.length <= 105
  1 <= nums[i] <= 105
  1 <= k <= 105


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/frequency-of-the-most-frequent-element
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
  let ret = 0;
  nums.sort((a, b) => a - b);
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    ret = Math.max(ret, help(nums, i));
  }
  return ret;

  function help(arr, idx) {
    let temp = k;
    const target = arr[idx];
    let ret = 1;
    for (let i = idx - 1; i >= 0; i -= 1) {
      temp -= target - arr[i];
      if (temp >= 0) {
        ret += 1;
      } else {
        break;
      }
    }
    return ret;
  }
};

/**
 * 将数组arr递增排序
 * 因为只能递增，所以最高频数最大就是arr中最后一个元素
 * 可能的最大频数一定是前n个元素递增k次，和 n + 1 个元素值相同
 * 上述其实就是暴力解，会超时
 */


var maxFrequency = function(nums, k) {
  nums.sort((a, b) => a - b);
  let ret = 1;
  let total = 0;
  let l = 0;
  let r = 1;
  for (; r < nums.length; r += 1) {
    total += (nums[r] - nums[r - 1]) * (r - l);
    while (total > k) {
      total -= nums[r] - nums[l];
      l += 1;
    }
    ret = Math.max(ret, r - l + 1);
  }
  return ret;
};
/**
 * 滑动窗口优化
 * 解释下 (nums[r] - nums[r - 1]) * (r - l)
 * nums[r] - nums[r - 1]：当前元素n，那么n - 1要变成和n一样，需要 nums[r] - nums[r - 1] 次
 * 同时这样操作后就可以使得[l, r - 1]区间内的值都相同
 * 那么如果[l, r - 1]区间内都要变成元素n，就需要在乘以(r - l)次
 */
