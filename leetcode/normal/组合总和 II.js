/* 
  给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

  candidates 中的每个数字在每个组合中只能使用一次。

  说明：

  所有数字（包括目标数）都是正整数。
  解集不能包含重复的组合。 
  示例 1:

  输入: candidates = [10,1,2,7,6,1,5], target = 8,
  所求解集为:
  [
    [1, 7],
    [1, 2, 5],
    [2, 6],
    [1, 1, 6]
  ]
  示例 2:

  输入: candidates = [2,5,2,1,2], target = 5,
  所求解集为:
  [
    [1,2,2],
    [5]
  ]
  通过次数118,002提交次数183,357

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/combination-sum-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const ret = [];
  candidates.sort((a, b) => a - b);
  run([], target, 0);
  return ret;

  function run(arr, target, start) {
    if (target < 0) return;
    if (target === 0) {
      ret.push(arr);
      return;
    }
    for (let i = start; i < candidates.length; i += 1) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      arr.push(candidates[i]);
      run([...arr], target - candidates[i], i + 1);
      arr.pop();
    }
  }
};

/**
 * 因为每个数只能取一次
 * 所以例子中的[1, 1, 6]符合
 * 同时解集不能包含重复的组合
 * 所以例子中的[1, 7]和[7, 1]，虽然1有两个，但是解重复了
 * 
 * 所以核心就是对candidates排序后
 * if (i > start && candidates[i] === candidates[i - 1]) 这个判定
 * 第一个1 不会包含后续的1
 * 但是第二个1会包含前一个1
 */