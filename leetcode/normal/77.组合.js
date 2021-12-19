/* 
  给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

  示例:

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

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/combinations
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const ret = [];
  run([], 1);
  return ret;

  function run(arr, start) {
    if (arr.length === k) {
      ret.push(arr);
      return;
    }
    if (arr.length > k) return;
    for (let i = start; i <= n; i += 1) {
      run([...arr, i], i + 1);
    }
  }
};

/**
 * 每次run都要浅拷贝一份arr，没必要，可以只在push到ret的时候做一次拷贝
 */

var combine = function(n, k) {
  const ret = [];
  run([], 1);
  return ret;

  function run(arr, start) {
    if (arr.length === k) {
      ret.push([...arr]);
      return;
    }
    if (arr.length > k) return;
    for (let i = start; i <= n; i += 1) {
      arr.push(i);
      run(arr, i + 1);
      arr.pop();
    }
  }
};