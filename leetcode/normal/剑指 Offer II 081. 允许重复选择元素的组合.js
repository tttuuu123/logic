/* 
  给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，找出 candidates 中所有可以使数字和为目标数 target 的唯一组合。

  candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是不同的。 

  对于给定的输入，保证和为 target 的唯一组合数少于 150 个。


  示例 1：

  输入: candidates = [2,3,6,7], target = 7
  输出: [[7],[2,2,3]]
  示例 2：

  输入: candidates = [2,3,5], target = 8
  输出: [[2,2,2,2],[2,3,3],[3,5]]
  示例 3：

  输入: candidates = [2], target = 1
  输出: []
  示例 4：

  输入: candidates = [1], target = 1
  输出: [[1]]
  示例 5：

  输入: candidates = [1], target = 2
  输出: [[1,1]]

  提示：

  1 <= candidates.length <= 30
  1 <= candidates[i] <= 200
  candidate 中的每个元素都是独一无二的。
  1 <= target <= 500
   

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/Ygoe9J
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const ret = [];
  candidates.sort((a, b) => a - b);
  dfs(0, target, [])
  return ret;

  function dfs(i, remain, arr) {
    if (remain < 0) return;
    if (remain === 0) {
      ret.push(arr);
      return;
    }
    if (i === candidates.length) return;
    if (remain < candidates[i]) return;
    // 继续用当前数字
    dfs(i, remain - candidates[i], [...arr, candidates[i]]);
    // 不用当前数字
    dfs(i + 1, remain, [...arr]);
  }
};

/**
 * 也可以不排序
 * 排序复杂度是O(nlogn)，dfs复杂度是O(n)，总复杂度反而变高了
 */

var combinationSum = function(candidates, target) {
  const ret = [];
  dfs(0, target, [])
  return ret;

  function dfs(i, remain, arr) {
    if (remain < 0) return;
    if (remain === 0) {
      ret.push(arr);
      return;
    }
    if (i === candidates.length) return;
    // 继续用当前数字
    if (remain - candidates[i] >= 0) {
      dfs(i, remain - candidates[i], [...arr, candidates[i]]);
    }
    // 不用当前数字
    dfs(i + 1, remain, [...arr]);
  }
};