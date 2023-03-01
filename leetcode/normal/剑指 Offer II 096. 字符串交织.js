/* 
  给定三个字符串 s1、s2、s3，请判断 s3 能不能由 s1 和 s2 交织（交错） 组成。

  两个字符串 s 和 t 交织 的定义与过程如下，其中每个字符串都会被分割成若干 非空 子字符串：

  s = s1 + s2 + ... + sn
  t = t1 + t2 + ... + tm
  |n - m| <= 1
  交织 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 + ...
  提示：a + b 意味着字符串 a 和 b 连接。
   

  示例 1：


  输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
  输出：true
  示例 2：

  输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
  输出：false
  示例 3：

  输入：s1 = "", s2 = "", s3 = ""
  输出：true
   

  提示：

  0 <= s1.length, s2.length <= 100
  0 <= s3.length <= 200
  s1、s2、和 s3 都由小写英文字母组成
   

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/IY6buf
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  const dp = Array(s1.length + 1).fill(0).map(() => Array(s2.length + 1).fill(false));
  dp[0][0] = true;
  for (let i = 0; i < s1.length; i += 1) {
    dp[i + 1][0] = dp[i][0] && (s1[i] === s3[i]);
  }

  for (let j = 0; j < s2.length; j += 1) {
    dp[0][j + 1] = dp[0][j] && (s2[j] === s3[j]);
  }

  for (let i = 1; i <= s1.length; i += 1) {
    for (let j = 1; j <= s2.length; j += 1) {
      if (s1[i - 1] === s3[i + j - 1]) {
        dp[i][j] = dp[i][j] || dp[i - 1][j];
      }
      if (s2[j - 1] === s3[i + j - 1]) {
        dp[i][j] = dp[i][j] || dp[i][j - 1];
      }
    }
  }
  return dp[s1.length][s2.length];
};

/**
 * dp[i][j] 定义为 s1.substring(0, i + 1) + s2.substring(0, j + 1) 可以交织成 s3.substring(0, i + j + 1)
 * 则有 dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) || (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1])
 */