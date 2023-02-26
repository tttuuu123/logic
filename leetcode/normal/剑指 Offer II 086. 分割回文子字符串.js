/* 
  给定一个字符串 s ，请将 s 分割成一些子串，使每个子串都是 回文串 ，返回 s 所有可能的分割方案。

  回文串 是正着读和反着读都一样的字符串。

  示例 1：

  输入：s = "google"
  输出：[["g","o","o","g","l","e"],["g","oo","g","l","e"],["goog","l","e"]]
  示例 2：

  输入：s = "aab"
  输出：[["a","a","b"],["aa","b"]]
  示例 3：

  输入：s = "a"
  输出：[["a"]]
   

  提示：

  1 <= s.length <= 16
  s 仅由小写英文字母组成

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/M99OJA
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const dp = Array(s.length).fill(0).map(() => Array(s.length).fill(false));
  for (let i = s.length - 1; i >= 0; i -= 1) {
    for (let j = i; j < s.length; j += 1) {
      dp[i][j] = (s[i] === s[j]) && ((j - i < 2) || dp[i + 1][j - 1]);
    }
  }
  const ret = [];
  dfs([], 0);
  return ret;

  function dfs(arr, start) {
    if (start === s.length) {
      ret.push([...arr]);
      return;
    }
    for (let i = start; i < s.length; i += 1) {
      if (!dp[start][i]) continue;
      arr.push(s.substring(start, i + 1));
      dfs(arr, i + 1);
      arr.pop();
    }
  }
};

/**
 * dp[i][j] = s[i] === s[j] && ((j - i < 2) || dp[i+ 1][j - 1])
 */