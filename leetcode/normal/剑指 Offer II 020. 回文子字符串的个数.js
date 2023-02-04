/* 
  给定一个字符串 s ，请计算这个字符串中有多少个回文子字符串。

  具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。


  示例 1：

  输入：s = "abc"
  输出：3
  解释：三个回文子串: "a", "b", "c"
  示例 2：

  输入：s = "aaa"
  输出：6
  解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
   

  提示：

  1 <= s.length <= 1000
  s 由小写英文字母组成


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/a7VOhD
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  const len = s.length;
  const dp = Array(len).fill(0).map(() => Array(len).fill(false));
  let ret = 0;
  for (let i = len - 1; i >= 0; i -= 0) {
    for (let j = i; j < len; j += 1) {
      dp[i][j] = s[i] === s[j] && ((j - i + 1 <= 3) || dp[i + 1][j - 1]);
      if (dp[i][j]) ret += 1;
    }
  }
  return ret;
};

/**
 * j - i + 1 <= 3的意思是如下2种场景
 * 1、aa
 * 2、aba
 * 
 * 暴力解，用dp去优化
 */