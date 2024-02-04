/* 
  给定一个  无重复元素 的 有序 整数数组 nums 。

  返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表 。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。

  列表中的每个区间范围 [a,b] 应该按如下格式输出：

  "a->b" ，如果 a != b
  "a" ，如果 a == b
  

  示例 1：

  输入：nums = [0,1,2,4,5,7]
  输出：["0->2","4->5","7"]
  解释：区间范围是：
  [0,2] --> "0->2"
  [4,5] --> "4->5"
  [7,7] --> "7"
  示例 2：

  输入：nums = [0,2,3,4,6,8,9]
  输出：["0","2->4","6","8->9"]
  解释：区间范围是：
  [0,0] --> "0"
  [2,4] --> "2->4"
  [6,6] --> "6"
  [8,9] --> "8->9"
  

  提示：

  0 <= nums.length <= 20
  -231 <= nums[i] <= 231 - 1
  nums 中的所有值都 互不相同
  nums 按升序排列
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (nums.length === 0) return [];
  const ret = [];
  let j = 0;
  let i = 0;
  while (i < nums.length) {
    while (i + 1 < nums.length && (nums[i] + 1) === nums[i + 1]) i += 1;
    if (i === j) {
      ret.push('' + nums[i]);
    } else {
      ret.push(`${nums[j]}->${nums[i]}`);
    }
    i += 1;
    j = i;
  }
  return ret;
};