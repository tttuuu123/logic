/* 
  给定一个字符串 s，请将 s 分割成一些子串，使每个子串都是回文串。

  返回符合要求的 最少分割次数 。

  示例 1：

  输入：s = "aab"
  输出：1
  解释：只需一次分割就可将 s 分割成 ["aa","b"] 这样两个回文子串。
  示例 2：

  输入：s = "a"
  输出：0
  示例 3：

  输入：s = "ab"
  输出：1

  提示：

  1 <= s.length <= 2000
  s 仅由小写英文字母组成

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/omKAoA
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  const len = s.length;
  const dp = Array(len + 1).fill(0);
  const map = {};
  for (let i = 1; i <= len; i += 1) {
    dp[i] = dp[i - 1] + 1;
    for (let j = 0; j < i; j += 1) {
      if (isPalindromic(j, i - 1)) {
        dp[i] = Math.min(dp[i], dp[j] + 1);
      }
    }
  }
  return dp[len] - 1;

  function isDef(v) {
    return v !== undefined;
  }
  
  function isPalindromic(i, j) {
    if (isDef(map[i]) && isDef(map[i][j])) return map[i][j];
    while (i <= j) {
      if (!isDef(map[i])) map[i] = {};
      if (s[i] !== s[j]) {
        map[i][j] = false;
        return false;
      }
      i += 1;
      j -= 1;
    }
    map[i - 1][j + 1] = true;
    return true;
  }
};
