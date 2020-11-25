/* 
  给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

  说明：

  拆分时可以重复使用字典中的单词。
  你可以假设字典中没有重复的单词。
  示例 1：

  输入: s = "leetcode", wordDict = ["leet", "code"]
  输出: true
  解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
  示例 2：

  输入: s = "applepenapple", wordDict = ["apple", "pen"]
  输出: true
  解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
       注意你可以重复使用字典中的单词。
  示例 3：

  输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
  输出: false

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/word-break
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

/**
 * dp[i] 表示 s中的 下标0 到 下标i 的字符串是否可被拆分
 * 
 * 若dp[i]可被拆分
 * 
 * 则必然有：
 * dp[0]可被拆分，且s.substring(0, i)在wordDict中存在
 * 或 dp[1]可被拆分，且s.substring(1, i)在wordDict中存在
 * 或 dp[2]可被拆分，且s.substring(2, i)在wordDict中存在
 * ......
 * 或 dp[j]可被拆分，且s.substring(j, i)在wordDict中存在 -- 转移方程
 * 
 * 以上条件满足一个，则 dp[i] = true
 */