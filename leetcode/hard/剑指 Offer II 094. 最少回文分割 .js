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
  链接：https://leetcode.cn/problems/omKAoA
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  let ret = Infinity;
  const dp = Array(s.length).fill(0).map(() => Array(s.length).fill(false));
  for (let i = s.length - 1; i >= 0; i -= 1) {
    for (let j = i; j < s.length; j += 1) {
      dp[i][j] = (s[i] === s[j]) && ((j - i + 1 <= 2) || dp[i + 1][j - 1]);
    }
  }
  dfs([], 0);
  return ret;

  function dfs(arr, start) {
    if (start === s.length) {
      ret = Math.min(ret, arr.length - 1);
      return;
    }
    for (let i = start; i < s.length; i += 1) {
      if (dp[start][i]) {
        arr.push(s.substring(start, i + 1));
        dfs(arr, i + 1);
        arr.pop();
      }
    }
  }
};

/**
 * dp[i][j] 定义为 s.substring(i, j + 1) 是否为回文字符串
 * 本质是计算了所有回文的分割方式，找出分割最少的那个
 */

var minCut = function(s) {
  let ret = Infinity;
  const dp = Array(s.length).fill(0).map(() => Array(s.length).fill(false));
  for (let i = s.length - 1; i >= 0; i -= 1) {
    for (let j = i; j < s.length; j += 1) {
      dp[i][j] = (s[i] === s[j]) && ((j - i + 1 <= 2) || dp[i + 1][j - 1]);
    }
  }
  const f = Array(s.length).fill(Infinity);
  for (let j = 0; j < s.length; j += 1) {
    if (dp[0][j]) {
      f[j] = 0;
      continue;
    }
    for (let i = 0; i < j; i += 1) {
      if (dp[i + 1][j]) {
        f[j] = Math.min(f[j], f[i] + 1);
      }
    }
  }
  return f[f.length - 1];
};

/**
 * 也可以直接求解
 * f[j] 定义为 s.substring(0, j + 1) 分割为回文串的最少分割次数
 * 若有 0 < i < j
 * 存在dp[0][j]，则f[j] = 0
 * 否则若 dp[i + 1][j] === true
 * 那么 f[j] = Math.min(f[j], f[i] + 1);
 */