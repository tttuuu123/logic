/* 
  给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

  示例 1:

  输入: n = 4, k = 2
  输出:
  [
    [2,4],
    [3,4],
    [2,3],
    [1,2],
    [1,3],
    [1,4],
  ]
  示例 2:

  输入: n = 1, k = 1
  输出: [[1]]
   

  提示:

  1 <= n <= 20
  1 <= k <= n

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/uUsW3B
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const ret = [];
  dfs(1, [])
  return ret;

  function dfs(idx, arr) {
    if (arr.length === k) {
      ret.push([...arr]);
      return;
    }
    if (idx === n + 1) return;
    for (let i = idx; i <= n; i += 1) {
      arr.push(i);
      dfs(i + 1, arr);
      arr.pop();
    }
  }
};

var combine = function(n, k) {
  const ret = [];
  dfs(1, [])
  return ret;

  function dfs(idx, arr) {
    if (arr.length === k) {
      ret.push([...arr]);
      return;
    }
    if (idx === n + 1) return;
    arr.push(idx);
    dfs(idx + 1, arr);
    arr.pop();
    dfs(idx + 1, arr);
  }
};