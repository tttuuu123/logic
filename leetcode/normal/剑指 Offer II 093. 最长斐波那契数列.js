/* 
  如果序列 X_1, X_2, ..., X_n 满足下列条件，就说它是 斐波那契式 的：

  n >= 3
  对于所有 i + 2 <= n，都有 X_i + X_{i+1} = X_{i+2}
  给定一个严格递增的正整数数组形成序列 arr ，找到 arr 中最长的斐波那契式的子序列的长度。如果一个不存在，返回  0 。

  （回想一下，子序列是从原序列  arr 中派生出来的，它从 arr 中删掉任意数量的元素（也可以不删），而不改变其余元素的顺序。例如， [3, 5, 8] 是 [3, 4, 5, 6, 7, 8] 的一个子序列）

  示例 1：

  输入: arr = [1,2,3,4,5,6,7,8]
  输出: 5
  解释: 最长的斐波那契式子序列为 [1,2,3,5,8] 。
  示例 2：

  输入: arr = [1,3,7,11,12,14,18]
  输出: 3
  解释: 最长的斐波那契式子序列有 [1,11,12]、[3,11,14] 以及 [7,11,18] 。
   

  提示：

  3 <= arr.length <= 1000
  1 <= arr[i] < arr[i + 1] <= 10^9

   

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/Q91FMA
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
  return dfs(0, []);

  function dfs(start, cur) {
    if (start === arr.length) return cur.length;
    let ret = cur.length;
    for (let i = start; i < arr.length; i += 1) {
      if (check(cur, arr[i])) {
        cur.push(arr[i]);
        ret = Math.max(ret, dfs(i + 1, cur));
        cur.pop();
      }
    }
    return ret;
  }

  function check(arr, num) {
    if (arr.length < 2) return true;
    return num === arr[arr.length - 1] + arr[arr.length - 2];
  }
};

/**
 * dfs + 回溯
 * 有个问题，例如[1,2,3]
 * 会比对到[1,2,3],[2,3],[3]这样重复执行的部分
 */

var lenLongestFibSubseq = function(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i += 1) {
    map.set(arr[i], i);
  }
  let ret = 0;
  const dp = Array(arr.length).fill(0).map(() => Array(arr.length).fill(0));
  // k < i < j
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = arr.length - 1; j > i; j -= 1) {
      if (map.has(arr[j] - arr[i])) {
        const k = map.get(arr[j] - arr[i]);
        if (k < i) {
          dp[i][j] = Math.max(dp[k][i] + 1, 3);
          ret = Math.max(ret, dp[i][j]);
        }
      }
    }
  }
  return ret;
};

/**
 * dp[i][j] 定义为 arr[i]和arr[j]作为最后两个数字的斐波那契式子序列的最大长度
 * 如果arr中存在 arr[k] = arr[j] - arr[i]，就会至少存在[arr[k], arr[i], arr[j]]
 * 则 dp[i][j] = Math.max(dp[k][i] + 1, 3)
 */