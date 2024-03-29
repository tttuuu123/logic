/* 
  给定一个非空整数数组，找到使所有数组元素相等所需的最小移动数，其中每次移动可将选定的一个元素加1或减1。 您可以假设数组的长度最多为10000。

  例如:

  输入:
  [1,2,3]

  输出:
  2

  说明：
  只有两个动作是必要的（记得每一步仅可使其中一个元素加1或减1）： 

  [1,2,3]  =>  [2,2,3]  =>  [2,2,2]

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  nums.sort((a, b) => a - b);
  const tar = nums[~~(nums.length / 2)];
  let ret = 0;
  for (const num of nums) {
    ret += Math.abs(tar - num);
  }
  return ret;
};

/**
 * 实际就是求 xi - tar (0 < i < num) 的绝对值之和最小
 * 也就是求中位数
 */
