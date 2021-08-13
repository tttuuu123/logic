/* 
  一个数组的 最小乘积 定义为这个数组中 最小值 乘以 数组的 和 。

  比方说，数组 [3,2,5] （最小值是 2）的最小乘积为 2 * (3+2+5) = 2 * 10 = 20 。
  给你一个正整数数组 nums ，请你返回 nums 任意 非空子数组 的最小乘积 的 最大值 。由于答案可能很大，请你返回答案对  109 + 7 取余 的结果。

  请注意，最小乘积的最大值考虑的是取余操作 之前 的结果。题目保证最小乘积的最大值在 不取余 的情况下可以用 64 位有符号整数 保存。

  子数组 定义为一个数组的 连续 部分。

  示例 1：

  输入：nums = [1,2,3,2]
  输出：14
  解释：最小乘积的最大值由子数组 [2,3,2] （最小值是 2）得到。
  2 * (2+3+2) = 2 * 7 = 14 。
  示例 2：

  输入：nums = [2,3,3,1,2]
  输出：18
  解释：最小乘积的最大值由子数组 [3,3] （最小值是 3）得到。
  3 * (3+3) = 3 * 6 = 18 。
  示例 3：

  输入：nums = [3,1,5,6,4,2]
  输出：60
  解释：最小乘积的最大值由子数组 [5,6,4] （最小值是 4）得到。
  4 * (5+6+4) = 4 * 15 = 60 。

  提示：

  1 <= nums.length <= 105
  1 <= nums[i] <= 107

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/maximum-subarray-min-product
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function(nums) {
  const l = [];
  const r = [];
  const stack = [];
  for (let i = 0; i < nums.length; i += 1) {
    l[i] = -1;
    r[i] = nums.length;
  }
  for (let i = 0; i < nums.length; i += 1) {
    while (stack.length && nums[i] <= nums[stack[stack.length - 1]]) {
      r[stack[stack.length - 1]] = i;
      stack.pop();
    }
    stack.length && (l[i] = stack[stack.length - 1]);
    stack.push(i);
  }
  const sum = [0];
  for (let i = 0; i < nums.length; i += 1) {
    sum[i + 1] = sum[i] + nums[i];
  }
  let ans = 0;
  for (let i = 0; i < nums.length; i += 1) {
    ans = Math.max(ans, nums[i] * (sum[r[i]] - sum[l[i] + 1]));
  }
  return ans % 1000000007;
};

/**
 * 假设当前下标i的数字为某个子数组中的最小值
 * 则以i开始向左右分别找到a和b，这2个位置的数字小于i下标对应的数字
 * 则a、b之间就是这个最大子数组
 */