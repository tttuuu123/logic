/* 
  给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

  candidates 中的每个数字在每个组合中只能使用 一次 。

  注意：解集不能包含重复的组合。 

  示例 1:

  输入: candidates = [10,1,2,7,6,1,5], target = 8,
  输出:
  [
  [1,1,6],
  [1,2,5],
  [1,7],
  [2,6]
  ]
  示例 2:

  输入: candidates = [2,5,2,1,2], target = 5,
  输出:
  [
  [1,2,2],
  [5]
  ]
   

  提示:

  1 <= candidates.length <= 100
  1 <= candidates[i] <= 50
  1 <= target <= 30


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/combination-sum-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  const ret = [];
  run([], target, 0);
  return ret;

  function run(arr, remain, idx) {
    if (remain === 0) {
      ret.push([...arr]);
      return;
    }
    if (remain < 0 || idx === candidates.length) return;
    for (let i = idx; i < candidates.length; i += 1) {
      // 核心 i > idx 时，才会和前一位比较
      if (i > idx && candidates[i] === candidates[i - 1]) continue;
      if (remain < candidates[i]) break;
      arr.push(candidates[i]);
      run(arr, remain - candidates[i], i + 1);
      arr.pop();
    }
  }
};