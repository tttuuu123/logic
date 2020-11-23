/* 
  给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。

  返回 s 所有可能的分割方案。

  示例:

  输入: "aab"
  输出:
  [
    ["aa","b"],
    ["a","a","b"]
  ]

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/palindrome-partitioning
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const dp = Array.from({ length: s.length }, () => new Array(s.length).fill(false));
  for (let i = s.length; i >= 0; i -= 1) {
    for (let j = i; j < s.length; j += 1) {
      dp[i][j] = (s[i] === s[j]) && ((j - i < 2) || dp[i + 1][j - 1]);
    }
  }

  const ret = [];
  run([], 0);
  return ret;

  function run(arr, start) {
    if (start === s.length){
      ret.push([...arr]);
      return;
    }
    for (let i = start; i < s.length; i += 1) {
      if (!dp[start][i]) continue;
      arr.push(s.substring(start, i + 1));
      run(arr, i + 1);
      arr.pop();
    }
  }
};

/**
 * dp[i][j] 为 下标i 到 下标j 是否为回文串
 * dp[i][j] = (s[i] === s[j]) && ((j - i) < 2 || dp[i + 1][j - 1])
 * 
 * 所以可以先求出所有串是否为回文字符串
 * 
 * 然后题目要求分割后每个串都是回文字符串
 */