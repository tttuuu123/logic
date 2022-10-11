/* 
  给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

  示例 1:

  输入: 12258
  输出: 5
  解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
   

  提示：

  0 <= num < 231

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
  const str = '' + num;
  const dp = Array(str.length).fill(1);
  for (let i = 1; i < str.length; i += 1) {
    dp[i] = dp[i - 1];
    const n = +`${str[i - 1]}${str[i]}`;
    if (n >= 10 && n <= 25) {
      dp[i] += dp[i - 2] || 1;
    }
  }
  return dp[str.length - 1];
};

/**
 * 若num[n]可以单独翻译成一个字母
 * dp[n] = dp[n - 1]
 * 若num[n] 和 num[n - 1]可以组合翻译成一个字母，条件是+`${num[n - 1]}${num[n]}`在 [10, 25] 范围内
 * dp[n] = dp[n - 2]
 * 
 * 所以一般场景下dp[n] = dp[n - 1]
 * 若满足+`${num[n - 1]}${num[n]}`在 [10, 25] 范围内
 * dp[n] += dp[n - 2]
 * 
 * 同时实际只依赖当前项和前2项，所以可以用 滚动数组 优化空间复杂度
 */

