/* 
  给定一个可能有重复数字的整数数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

  candidates 中的每个数字在每个组合中只能使用一次，解集不能包含重复的组合。 

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
  链接：https://leetcode.cn/problems/4sjJUc
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
  dfs(0, target, []);
  return ret;

  function dfs(idx, remain, arr) {
    if (remain === 0) {
      ret.push([...arr]);
      return;
    }
    if (idx === candidates.length || remain < 0) return;
    for (let i = idx; i < candidates.length; i += 1) {
      if (i > idx && candidates[i] === candidates[i - 1]) continue;
      arr.push(candidates[i]);
      dfs(i + 1, remain - candidates[i], arr);
      arr.pop();
    }
  }
};

/**
 * 递归+回溯标准模板
 */