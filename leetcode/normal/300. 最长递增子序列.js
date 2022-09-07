/* 
  给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

  子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

  示例 1：

  输入：nums = [10,9,2,5,3,7,101,18]
  输出：4
  解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
  示例 2：

  输入：nums = [0,1,0,3,2,3]
  输出：4
  示例 3：

  输入：nums = [7,7,7,7,7,7,7]
  输出：1
   

  提示：

  1 <= nums.length <= 2500
  -104 <= nums[i] <= 104
   

  进阶：

  你可以设计时间复杂度为 O(n2) 的解决方案吗？
  你能将算法的时间复杂度降低到 O(n log(n)) 吗?

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

/**
 * dp(n) = dp[j] + 1
 * j 为 n 之前所有满足 arr[j] < arr[n] 的位置中 dp[j] 最大的那个下标
 */


var lengthOfLIS = function(nums) {
  const stack = [];
  let ret = 0;
  for (let i = 0; i < nums.length; i += 1) {
    while (stack.length && stack[stack.length - 1] >= nums[i]) stack.pop();
    stack.push(nums[i]);
    ret = Math.max(ret, stack.length);
  }
  return ret;
};

/**
 * [0,1,0,3,2,3] 但是这种场景会得出结论3，实际应该是[0,1,2,3]，结果是4，所以不正确，
 * 单调栈还是适合用来做区间最值问题，还是用上面的动态规划吧
 * 用一个严格单调递增栈来辅助判断，栈内的所有元素都满足条件，只要找到栈内元素最多的时候
 * 因为while循环内的每个数只会进一次，出一次，最多2次
 * 所以整体时间复杂度是O(n)
 */
