/* 
  给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

  你返回所有和为 0 且不重复的三元组。

  注意：答案中不可以包含重复的三元组。
   

  示例 1：

  输入：nums = [-1,0,1,2,-1,-4]
  输出：[[-1,-1,2],[-1,0,1]]
  解释：
  nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
  nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
  nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
  不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
  注意，输出的顺序和三元组的顺序并不重要。
  示例 2：

  输入：nums = [0,1,1]
  输出：[]
  解释：唯一可能的三元组和不为 0 。
  示例 3：

  输入：nums = [0,0,0]
  输出：[[0,0,0]]
  解释：唯一可能的三元组和为 0 。
   

  提示：

  3 <= nums.length <= 3000
  -105 <= nums[i] <= 105

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/3sum
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  if (nums[0] > 0 || nums[len - 1] < 0) return []; // [0,0,0] 所以不能 =0
  const ret = [];
  for (let i = 0; i < len - 2; i += 1) {
    if (nums[i] > 0) return ret;
    // 不能判断nums[i] === nums[i + 1]，因为诸如 [-1, -1, 2] 的场景下
    // 这么判断就跳过了
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        ret.push([nums[i], nums[l], nums[r]]);
        while (nums[l] === nums[l + 1]) l += 1;
        while (nums[r] === nums[r - 1]) r -= 1;
        l += 1;
        r -= 1;
      } else if (sum > 0) {
        r -= 1;
      } else {
        l += 1;
      }
    }
  }
  return ret;
};