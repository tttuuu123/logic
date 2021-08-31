/* 
  在 "100 game" 这个游戏中，两名玩家轮流选择从 1 到 10 的任意整数，累计整数和，先使得累计整数和达到或超过 100 的玩家，即为胜者。

  如果我们将游戏规则改为 “玩家不能重复使用整数” 呢？

  例如，两个玩家可以轮流从公共整数池中抽取从 1 到 15 的整数（不放回），直到累计整数和 >= 100。

  给定一个整数 maxChoosableInteger （整数池中可选择的最大数）和另一个整数 desiredTotal（累计和），判断先出手的玩家是否能稳赢（假设两位玩家游戏时都表现最佳）？

  你可以假设 maxChoosableInteger 不会大于 20， desiredTotal 不会大于 300。

  示例：

  输入：
  maxChoosableInteger = 10
  desiredTotal = 11

  输出：
  false

  解释：
  无论第一个玩家选择哪个整数，他都会失败。
  第一个玩家可以选择从 1 到 10 的整数。
  如果第一个玩家选择 1，那么第二个玩家只能选择从 2 到 10 的整数。
  第二个玩家可以通过选择整数 10（那么累积和为 11 >= desiredTotal），从而取得胜利.
  同样地，第一个玩家选择任意其他整数，第二个玩家都会赢。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/can-i-win
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
  if (((1 + maxChoosableInteger) * maxChoosableInteger / 2) < desiredTotal) return false;
  let mask = 0;
  return dfs(mask, maxChoosableInteger, desiredTotal);
};

function dfs(mask, range, total) {
  for (let i = 1; i <= range; i += 1) {
    // 已经用过的数字直接跳过
    if (mask & (1 << i)) continue;
    if (i >= total) return true;
    // 当亲数字没用过，判断对手是否能满足条件，对手如果不满足，就返回true
    if (!dfs(mask | (1 << i), range, total - i)) return true;
  }
  return false;
}

/**
 * 上述暴力解法超时
 * 考虑记忆化
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
  if (((1 + maxChoosableInteger) * maxChoosableInteger / 2) < desiredTotal) return false;
  let mask = 0;
  const map = {};
  return dfs(mask, maxChoosableInteger, desiredTotal);

  function dfs(mask, range, total) {
    if (map[mask]) return map[mask];
    for (let i = 1; i <= range; i += 1) {
      // 已经用过的数字直接跳过
      if (mask & (1 << i)) continue;
      // 当亲数字没用过，判断对手是否能满足条件，对手如果不满足，就返回true
      if (i >= total || !dfs(mask | (1 << i), range, total - i)) return map[mask] = true;
    }
    return map[mask] = false;
  }
};


