/* 
  给你一个字符串 s，找到 s 中最长的回文子串。

  如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

  示例 1：

  输入：s = "babad"
  输出："bab"
  解释："aba" 同样是符合题意的答案。
  示例 2：

  输入：s = "cbbd"
  输出："bb"
  

  提示：

  1 <= s.length <= 1000
  s 仅由数字和英文字母组成
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const dp = Array(s.length).fill(0).map(() => Array(s.length).fill(false));
  for (let i = 0; i < s.length; i += 1) {
    dp[i][i] = true;
  }
  let maxLen = 1;
  let start = 0;
  for (let len = 2; len <= s.length; len += 1) {
    for (let i = 0; i < s.length; i += 1) {
      const j = len + i - 1;
      if (j > s.length - 1) break;

      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        start = i;
      }
    }
  }
  return s.substring(start, start + maxLen);
};

/**
 * dp[i][j] 代表[i, j]区间是回文串
 */

var longestPalindrome = function(s) {
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i += 1) {
    const ret1 = findMax(i, i);
    const ret2 = findMax(i, i + 1);
    const ret = ret1[0] > ret2[0] ? ret1 : ret2;
    if (ret[0] >= end - start - 1) {
      start = ret[1];
      end = ret[2];
    }
  }
  return s.substring(start, end + 1);

  function findMax(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left -= 1;
      right += 1;
    }
    left += 1;
    right -= 1;
    return [right - left + 1, left, right];
  }
};