/* 
  给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。

  当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。

  请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。

  注意：不允许旋转信封。

  
  示例 1：

  输入：envelopes = [[5,4],[6,4],[6,7],[2,3]]
  输出：3
  解释：最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。
  示例 2：

  输入：envelopes = [[1,1],[1,1],[1,1]]
  输出：1
  

  提示：

  1 <= envelopes.length <= 105
  envelopes[i].length == 2
  1 <= wi, hi <= 105
*/

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  envelopes.sort((prev, next) => {
    if (prev[0] === next[0]) {
      return next[1] - prev[1];
    }
    return prev[0] - next[0];
  });

  let ret = 1;
  const dp = Array(envelopes.length).fill(1);
  for (let i = 1; i < envelopes.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (envelopes[j][1] < envelopes[i][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    ret = Math.max(ret, dp[i]);
  }
  return ret;
};

/**
 * 对数组一维升序排列，如果一维相同，二维降序排列
 * 那么就转为求第二维数组最长递增子序列长度
 */