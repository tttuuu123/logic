/* 
  给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是 2 。

  示例：

  输入：[4, 6, 7, 7]
  输出：[[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
   

  提示：

  给定数组的长度不会超过15。
  数组中的整数范围是 [-100,100]。
  给定数组中可能包含重复数字，相等的数字应该被视为递增的一种情况。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/increasing-subsequences
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const ret = [];
  run([], 0);
  return ret;

  function run(temp, k) {
    if (temp.length >= 2) ret.push(temp);
    if (k >= nums.length) return;
    const hasUse = {};
    for (let i = k; i < nums.length; i += 1) {
      // 剪枝：去重，已经使用过的元素不再使用，因为下个递归中会包含这个结果
      if (hasUse[nums[i]]) continue;
      if (temp.length === 0 || nums[i] >= temp[temp.length - 1]) {
        hasUse[nums[i]] = 1;
        run([...temp, nums[i]], i + 1);
      }
    }
  }
};