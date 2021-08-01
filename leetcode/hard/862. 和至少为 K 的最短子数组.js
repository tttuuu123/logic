/* 
  返回 A 的最短的非空连续子数组的长度，该子数组的和至少为 K 。

  如果没有和至少为 K 的非空子数组，返回 -1 。

  示例 1：

  输入：A = [1], K = 1
  输出：1
  示例 2：

  输入：A = [1,2], K = 4
  输出：-1
  示例 3：

  输入：A = [2,-1,2], K = 3
  输出：3

  提示：

  1 <= A.length <= 50000
  -10 ^ 5 <= A[i] <= 10 ^ 5
  1 <= K <= 10 ^ 9


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/shortest-subarray-with-sum-at-least-k
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function(A, K) {
  const queue = []; // 单调队列
  const sumArr = [0];
  // 求得前缀和数组
  for (let i = 0; i < A.length; i += 1) sumArr[i + 1] = sumArr[i] + A[i];
  queue.push(0);
  let poi = -1;
  let ret = -1;
  for (let i = 0; i < sumArr.length; i += 1) {
    while (queue.length > 0 && sumArr[i] - sumArr[queue[0]] >= K) {
      poi = queue.shift();
    }
    if (poi !== -1 && (i - poi < ret || ret === -1)) ret = i - poi;
    while (queue.length > 0 && sumArr[i] < sumArr[queue[queue.length - 1]]) queue.pop();
    queue.push(i);
  }
  return ret;
};