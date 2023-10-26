/* 
  给你整数 zero ，one ，low 和 high ，我们从空字符串开始构造一个字符串，每一步执行下面操作中的一种：

  将 '0' 在字符串末尾添加 zero  次。
  将 '1' 在字符串末尾添加 one 次。
  以上操作可以执行任意次。

  如果通过以上过程得到一个 长度 在 low 和 high 之间（包含上下边界）的字符串，那么这个字符串我们称为 好 字符串。

  请你返回满足以上要求的 不同 好字符串数目。由于答案可能很大，请将结果对 109 + 7 取余 后返回。

  示例 1：

  输入：low = 3, high = 3, zero = 1, one = 1
  输出：8
  解释：
  一个可能的好字符串是 "011" 。
  可以这样构造得到："" -> "0" -> "01" -> "011" 。
  从 "000" 到 "111" 之间所有的二进制字符串都是好字符串。
  示例 2：

  输入：low = 2, high = 3, zero = 1, one = 2
  输出：5
  解释：好字符串为 "00" ，"11" ，"000" ，"110" 和 "011" 。
  

  提示：

  1 <= low <= high <= 105
  1 <= zero, one <= low
*/

/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
  const MOD = 1e9 + 7;
  const dp = Array(high + 1).fill(0);
  dp[0] = 1;
  const map = [zero, one];

  for (let j = 1; j <= high; j += 1) {
    for (let i = 0; i < 2; i += 1) {
      if (j - map[i] >= 0) {
        dp[j] += dp[j - map[i]];
        dp[j] %= MOD;
      }
    }
  }

  let ret = 0;
  for (let i = low; i <= high; i += 1) {
    ret += dp[i];
    ret %= MOD;
  }
  return ret;
};

/**
 * 本质上就是完全背包问题，长度是背包，zero、one是可以使用无限次的物品
 * 并且根据题意，求的是排列数，所以先外层遍历背包
 * dp[i] 代表凑成长度为i的字符串的方式
 */