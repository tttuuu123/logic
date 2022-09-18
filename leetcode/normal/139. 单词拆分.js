/* 
  给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。

  注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

  示例 1：

  输入: s = "leetcode", wordDict = ["leet", "code"]
  输出: true
  解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
  示例 2：

  输入: s = "applepenapple", wordDict = ["apple", "pen"]
  输出: true
  解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
       注意，你可以重复使用字典中的单词。
  示例 3：

  输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
  输出: false
   
  提示：

  1 <= s.length <= 300
  1 <= wordDict.length <= 1000
  1 <= wordDict[i].length <= 20
  s 和 wordDict[i] 仅有小写英文字母组成
  wordDict 中的所有字符串 互不相同

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/word-break
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const dp = Array(s.length + 1).fill(false);
  const set = new Set(wordDict);
  dp[0] = true;
  for (let i = 1; i < s.length + 1; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (dp[j] && set.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[dp.length - 1];
};

/**
 * dp[i] 表示 s 的前i个字符是否可以用 wordDict 出现的单词拼出
 * 同时要注意 s 的第一个字符是 ''
 * dp[i] = dp[j] + wordDict.includes(s.substring(j, i))
 */

