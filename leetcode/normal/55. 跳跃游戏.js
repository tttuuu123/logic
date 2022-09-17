/* 
  给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

  数组中的每个元素代表你在该位置可以跳跃的最大长度。

  判断你是否能够到达最后一个下标。

  示例 1：

  输入：nums = [2,3,1,1,4]
  输出：true
  解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
  示例 2：

  输入：nums = [3,2,1,0,4]
  输出：false
  解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。

  提示：

  1 <= nums.length <= 3 * 104
  0 <= nums[i] <= 105


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/jump-game
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let poi = nums.length - 1;
  let temp;
  while (poi > 0) {
    temp = poi;
    for (let i = 0; i < poi; i += 1) {
      if (i + nums[i] >= poi) {
        poi = i;
        break;
      }
    }
    if (poi === temp) return false;
  }
  return poi === 0;
};

/**
 * 逆向思考，从最后一位开始倒推
 * 贪心：每次优先取最远的能满足条件的位置
 */


var canJump = function(nums) {
  let poi = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (i > poi) return false;
    if (poi >= nums.length) return true;
    poi = Math.max(poi, i + nums[i]);
  }
  return true;
}

/**
 * 正向思维
 */