/* 
  给你一个非负整数数组 nums ，你最初位于数组的第一个位置。

  数组中的每个元素代表你在该位置可以跳跃的最大长度。

  你的目标是使用最少的跳跃次数到达数组的最后一个位置。

  假设你总是可以到达数组的最后一个位置。

  示例 1:

  输入: nums = [2,3,1,1,4]
  输出: 2
  解释: 跳到最后一个位置的最小跳跃数是 2。
       从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
  示例 2:

  输入: nums = [2,3,0,1,4]
  输出: 2

  提示:

  1 <= nums.length <= 104
  0 <= nums[i] <= 1000

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/jump-game-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  return help(0, 0);

  function help(poi, curCnt) {
    if (poi === nums.length - 1) return curCnt;
    let ret = Infinity;
    for (let i = 1; i <= nums[poi]; i += 1) {
      ret = Math.min(ret, help(poi + i, curCnt + 1));
    }
    return ret;
  }
};

/**
 * 上述暴力解法会超时
 * 考虑用从最后一位x往前递推，看a、b、c...哪些位置能到x
 * 若有多个，则贪心选择最远的那个（例如优先选择a）
 */
var jump = function(nums) {
  let ret = 0;
  let poi = nums.length - 1;
  while (poi > 0) {
    for (let i = 0; i < poi; i += 1) {
      if (nums[i] + i >= poi) {
        poi = i;
        ret += 1;
        break;
      }
    }
  }
  return ret;
};