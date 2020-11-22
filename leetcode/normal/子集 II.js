/* 
  给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

  说明：解集不能包含重复的子集。

  示例:

  输入: [1,2,2]
  输出:
  [
    [2],
    [1],
    [1,2,2],
    [2,2],
    [1,2],
    []
  ]

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/subsets-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const ret = [[]];
  nums.sort((a, b) => a - b);
  run([], 0)
  return ret;

  function run(arr, start) {
    if (start === nums.length) return;
    for (let i = start; i < nums.length; i += 1) {
      if ((i > start) && (nums[i] === nums[i - 1])) continue;
      arr.push(nums[i]);
      const temp = [...arr];
      ret.push(temp);
      run(temp, i + 1);
      arr.pop();
    }
  }
};