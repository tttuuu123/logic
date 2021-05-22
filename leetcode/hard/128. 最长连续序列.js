/* 
  给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

  进阶：你可以设计并实现时间复杂度为 O(n) 的解决方案吗？

   

  示例 1：

  输入：nums = [100,4,200,1,3,2]
  输出：4
  解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
  示例 2：

  输入：nums = [0,3,7,2,5,8,4,6,0,1]
  输出：9
   

  提示：

  0 <= nums.length <= 104
  -109 <= nums[i] <= 109


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/longest-consecutive-sequence
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

import UnionSet from '../../structure/Union-Set';

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const ins = new UnionSet(nums.length);
  const map = {};
  for (let i = 0; i < nums.length; i += 1) {
    const n = nums[i]
    if (map[n] !== undefined) continue;
    map[n] = i;
    map[n - 1] !== undefined && ins.merge(i, map[n - 1]);
    map[n + 1] !== undefined && ins.merge(i, map[n + 1]);
  }
  let ret = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (ins.get(i) === i && ins.size[i] > ret) ret = ins.size[i];
  }
  return ret;
};