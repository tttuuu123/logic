/* 
  给定一个整数 n，返回 n! 结果尾数中零的数量。

  示例 1:

  输入: 3
  输出: 0
  解释: 3! = 6, 尾数中没有零。
  示例 2:

  输入: 5
  输出: 1
  解释: 5! = 120, 尾数中有 1 个零.
  说明: 你算法的时间复杂度应为 O(log n) 。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/factorial-trailing-zeroes
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let m = 5;
  let count = 0;
  while (~~(n / m)) {
    count += ~~(n / m);
    m *= 5;
  }
  return count;
};

/**
 * 脑筋急转弯
 * 只有2 * 5 会带上0
 * 所以就是算因子中有多少对2、5
 * 比如5的阶乘中因子有1个5，3个2（4 = 2 * 2)，那么就是一对2、5，所以末尾有一个0
 * 又因为2个数量一定会比5多，所以最终就是求出因子中5的数量
 */