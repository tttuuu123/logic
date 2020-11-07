/* 
  爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。

  最初，黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：

  选出任一 x，满足 0 < x < N 且 N % x == 0 。
  用 N - x 替换黑板上的数字 N 。
  如果玩家无法执行这些操作，就会输掉游戏。

  只有在爱丽丝在游戏中取得胜利时才返回 True，否则返回 False。假设两个玩家都以最佳状态参与游戏。
   
  示例 1：

  输入：2
  输出：true
  解释：爱丽丝选择 1，鲍勃无法进行操作。
  示例 2：

  输入：3
  输出：false
  解释：爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。
   

  提示：

  1 <= N <= 1000


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/divisor-game
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
  const dp = Array(N + 1).fill(false);
  dp[1] = false;
  dp[2] = true;
  for (let i = 3; i <= N; i += 1) {
    for (let j = 1; j < i; j += 1) {
      dp[i] = ((i % j === 0) && !dp[i - j]);
      if(dp[i]) break;
    }
  }
  return dp[N]
}

/**
 * f(1) = false
 * f(2) = true
 * f(3) = false
 * f(4): 先选1，满足条件，下一个数为3，因为f(3)为false，所以f(4)为true
 * f(5): 先选1，满足条件，下一个数为4，因为f(4)为true，所以f(5)为false
 * f(6)：先选1，满足条件，下一个数为5，因为f(5)为false，所以f(6)为true
 */


 /**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
  return N%2 === 0
};

/**
 * 如果N为偶数
 * 选1，则 N % 1 === 0 必然成立，
 * 下一个数 N - 1 为奇数
 */