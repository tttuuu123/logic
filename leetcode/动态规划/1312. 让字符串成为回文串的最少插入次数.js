/* 
  给你一个字符串 s ，每一次操作你都可以在字符串的任意位置插入任意字符。

  请你返回让 s 成为回文串的 最少操作次数 。

  「回文串」是正读和反读都相同的字符串。

  示例 1：

  输入：s = "zzazz"
  输出：0
  解释：字符串 "zzazz" 已经是回文串了，所以不需要做任何插入操作。
  示例 2：

  输入：s = "mbadm"
  输出：2
  解释：字符串可变为 "mbdadbm" 或者 "mdbabdm" 。
  示例 3：

  输入：s = "leetcode"
  输出：5
  解释：插入 5 个字符后字符串变为 "leetcodocteel" 。
  

  提示：

  1 <= s.length <= 500
  s 中所有字符都是小写字母。
*/

/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  const dp = Array(s.length).fill(0).map(() => Array(s.length).fill(0));
 
  for (let i = s.length - 2; i >= 0; i -= 1) {
    for (let j = i + 1; j < s.length; j += 1) {
      if (s[i] === s[j]) {
        dp[i][j] =  dp[i + 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
      }
    }
  }
  return dp[0][s.length - 1];
};

/**
 * dp[i][j] 代表区间[i, j]转为回文串需要操作的最小操作数
 * 当s[i] === s[j]
 * dp[i][j] = dp[i + 1][j - 1];
 * 否则需要对dp[i + 1][j]或dp[i][j - 1]执行一次插入操作
 * dp[i][j] = Math.min(dp[i][j - 1], dp[i + 1][j]) + 1
 * 
 * 因为涉及到dp[i][j - 1]、dp[i + 1][j]和dp[i + 1][j - 1]
 * 所以自下而上、自左向右遍历dp数组
 */