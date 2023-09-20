/* 
  给你一个由 n 个数对组成的数对数组 pairs ，其中 pairs[i] = [lefti, righti] 且 lefti < righti 。

  现在，我们定义一种 跟随 关系，当且仅当 b < c 时，数对 p2 = [c, d] 才可以跟在 p1 = [a, b] 后面。我们用这种形式来构造 数对链 。

  找出并返回能够形成的 最长数对链的长度 。

  你不需要用到所有的数对，你可以以任何顺序选择其中的一些数对来构造。

  示例 1：

  输入：pairs = [[1,2], [2,3], [3,4]]
  输出：2
  解释：最长的数对链是 [1,2] -> [3,4]。
  示例 2：

  输入：pairs = [[1,2],[7,8],[4,5]]
  输出：3
  解释：最长的数对链是 [1,2] -> [4,5] -> [7,8]。
  

  提示：

  n == pairs.length
  1 <= n <= 1000
  -1000 <= lefti < righti <= 1000
*/

/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  pairs.sort((a, b) => a[0] - b[0]);
  const dp = Array(pairs.length).fill(1);
  for (let i = 1; i < pairs.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (pairs[i][0] > pairs[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

/**
 * dp[i] 表示 前i个 数组对中 最长对数长度
 * dp[i] = Math.max(dp[i], dp[j] + 1);
 */


var findLongestChain = function(pairs) {
  let cur = -Number.MAX_VALUE, ret = 0;
  pairs.sort((a, b) => a[1] - b[1]);
  for (const [prev, next] of pairs) {
      if (cur < prev) {
          cur = next;
          ret += 1;
      }
  }
  return ret;
}

/**
 * 贪心
 * 按照数组中第二位排序
 */
