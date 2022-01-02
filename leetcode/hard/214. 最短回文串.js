/*
  给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。

  示例 1：

  输入：s = "aacecaaa"
  输出："aaacecaaa"
  示例 2：

  输入：s = "abcd"
  输出："dcbabcd"
   

  提示：

  0 <= s.length <= 5 * 104
  s 仅由小写英文字母组成


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/shortest-palindrome
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
  const reS = [...s].reverse().join('');
  if (reS === s) return s;
  let str = s + reS;
  const len = str.length;
  const next = [-1];
  for (let i = 1, j = -1; i < len; i += 1) {
    while (j !== -1 && str[j + 1] !== str[i]) j = next[j];
    if (str[j + 1] === str[i]) j += 1;
    next[i] = j;
    // 新的next[i]不能超过s的长度
    // 场景: aaba，转换后为aabaabaa
    while (next[i] >= s.length) next[i] = next[next[i]];
  }
  const target = next[len - 1];
  str = str.substring(target + 1, len / 2);
  return reS + str;
};
