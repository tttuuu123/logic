/* 
  给你一个整数数组 nums ，数组中共有 n 个整数。132 模式的子序列 由三个整数 nums[i]、nums[j] 和 nums[k] 组成，并同时满足：i < j < k 和 nums[i] < nums[k] < nums[j] 。

  如果 nums 中存在 132 模式的子序列 ，返回 true ；否则，返回 false 。

  示例 1：

  输入：nums = [1,2,3,4]
  输出：false
  解释：序列中不存在 132 模式的子序列。
  示例 2：

  输入：nums = [3,1,4,2]
  输出：true
  解释：序列中有 1 个 132 模式的子序列： [1, 4, 2] 。
  示例 3：

  输入：nums = [-1,3,2,0]
  输出：true
  解释：序列中有 3 个 132 模式的的子序列：[-1, 3, 2]、[-1, 3, 0] 和 [-1, 2, 0] 。

  提示：

  n == nums.length
  1 <= n <= 2 * 105
  -109 <= nums[i] <= 109

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/132-pattern
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  // 求出每个元素作为中间值时，左边区间的最小值
  const minArr = [Infinity];
  for (let i = 1; i < nums.length; i += 1) {
    minArr[i] = Math.min(minArr[i - 1], nums[i - 1]);
  }

  const stack = [];
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    // 以nums[i]作为中间最大值，val记录nums[i]右边区间的最大值
    let val = nums[i];
    while (stack.length && nums[i] > stack[stack.length - 1]) {
      val = stack.pop();
    }
    stack.push(nums[i]);
    // minArr[i]就是nums[i]左边区间的最小值，val就是右边区间的最大值
    if (minArr[i] < nums[i] && val < nums[i] && val > minArr[i]) return true;
  }
  return false;
};

/**
 * 将每个元素当作中间的最大值j，求出该元素前面的最小值i，再求出该元素后面是否存在k，是的i<j<k
 * 理论上k应该是该元素后面比k小的最大值
 */