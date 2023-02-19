/* 
  给你一个整数数组 nums ，返回 nums[i] XOR nums[j] 的最大运算结果，其中 0 ≤ i ≤ j < n 。

  示例 1：

  输入：nums = [3,10,5,25,2,8]
  输出：28
  解释：最大运算结果是 5 XOR 25 = 28.
  示例 2：

  输入：nums = [14,70,53,83,49,91,36,80,92,51,66,70]
  输出：127
   

  提示：

  1 <= nums.length <= 2 * 105
  0 <= nums[i] <= 231 - 1


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/ms70jA
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  let ret = -Infinity;
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i; j < nums.length; j += 1) {
      ret = Math.max(ret,nums[i] ^ nums[j]);
    }
  }
  return ret;
};

/**
 * 暴力解法，会超时
 * 二进制我也不太熟，得多学习一下
 */