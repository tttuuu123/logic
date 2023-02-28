/* 
  如果一个由 '0' 和 '1' 组成的字符串，是以一些 '0'（可能没有 '0'）后面跟着一些 '1'（也可能没有 '1'）的形式组成的，那么该字符串是 单调递增 的。

  我们给出一个由字符 '0' 和 '1' 组成的字符串 s，我们可以将任何 '0' 翻转为 '1' 或者将 '1' 翻转为 '0'。

  返回使 s 单调递增 的最小翻转次数。

  示例 1：

  输入：s = "00110"
  输出：1
  解释：我们翻转最后一位得到 00111.
  示例 2：

  输入：s = "010110"
  输出：2
  解释：我们翻转得到 011111，或者是 000111。
  示例 3：

  输入：s = "00011000"
  输出：2
  解释：我们翻转得到 00000000。
   

  提示：

  1 <= s.length <= 20000
  s 中只包含字符 '0' 和 '1'
   

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/cyJERH
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
  const arr = s.split('');
  return dfs(0, 0);

  function dfs(start, count) {
    if (start === arr.length) return count;
    let ret;
    const temp = arr[start];
    if (start > 0 && arr[start - 1] === '1') {
      arr[start] = '1';
      ret = dfs(start + 1, count + +(temp !== arr[start]));
      arr[start] = temp;
      return ret;
    }
    arr[start] = temp === '0' ? '1' : '0';
    ret = dfs(start + 1, count + 1)
    arr[start] = temp;
    ret = Math.min(ret, dfs(start + 1, count));
    return ret;
  }
};

/**
 * 超时
 */


var minFlipsMonoIncr = function(s) {
  const dp = Array(s.length).fill(0).map(() => Array(2).fill(0));
  dp[0][0] = +(s[0] !== '0');
  dp[0][1] = +(s[0] !== '1');
  for (let i = 1; i < s.length; i += 1) {
    dp[i][0] = dp[i - 1][0] + +(s[i] !== '0');
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1]) + +(s[i] !== '1');
  }
  return Math.min(...dp[s.length - 1]);
};

/**
 * dp[i][0] 表示前i个元素最后一个元素为0 的最小翻转次数
 * dp[i][1] 表示前i个元素最后一个元素为1 的最小翻转次数
 */

var minFlipsMonoIncr = function(s) {
  let dp0 = +(s[0] !== '0');
  let dp1 = +(s[0] !== '1');
  for (let i = 1; i < s.length; i += 1) {
    let temp0 = dp0, temp1 = dp1;
    dp0 = temp0 + +(s[i] !== '0');
    dp1 = Math.min(temp0, temp1) + +(s[i] !== '1');
  }
  return Math.min(dp0, dp1);
};

/**
 * 上一个dp可以发现dp[i]只与dp[i - 1]有关
 * 可以进一步降低空间复杂度到O(1)
 */