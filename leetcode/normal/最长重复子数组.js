/* 
  给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。

 
  示例：

  输入：
  A: [1,2,3,2,1]
  B: [3,2,1,4,7]
  输出：3
  解释：
  长度最长的公共子数组是 [3, 2, 1] 。
   

  提示：

  1 <= len(A), len(B) <= 1000
  0 <= A[i], B[i] < 100

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  const aLen = A.length;
  const bLen = B.length;
  const dp = new Array(aLen + 1);
  let ret = 0;
  for (let i = 0; i <= aLen; i += 1) {
    dp[i] = new Array(bLen + 1).fill(0);
  }

  for (let i = 1; i <= aLen; i += 1) {
    for (let j = 1; j <= bLen; j += 1) {
      if (A[i - 1] == B[j - 1]) {     
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } 
      ret = Math.max(dp[i][j], ret);
    }
  }
  return ret;
};

/**
 * 
 * 如果A[i] === B[j]，
 * 那么dp[i][j] = dp[i - 1][j - 1] + 1
 * 即如果末尾A[i]和B[j]相同，长度就取决于之前dp[i - 1][j - 1]的数量 + 1
 * 显然dp[0][0] = 0
 * 如果A[1] = B[1]
 * 则dp[1][1] = dp[0][0] + 1 = 1
 * 否则dp[1][1] = 0
 */