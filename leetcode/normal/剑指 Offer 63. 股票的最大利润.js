/* 
  假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？

  示例 1:

  输入: [7,1,5,3,6,4]
  输出: 5
  解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
  示例 2:

  输入: [7,6,4,3,1]
  输出: 0
  解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
   

  限制：

  0 <= 数组长度 <= 10^5
   

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/gu-piao-de-zui-da-li-run-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = prices[0];
  let ret = 0;
  for (const price of prices) {
    if (price > min) {
      ret = Math.max(ret, price - min);
    } else {
      min = price;
    }
  }
  return ret;
};

/**
 * 因为只买卖一次，就是找出2个数字差值最大
 * 贪心
 * 维护一个最小值
 * 只要price比最小值大，就去尝试是否有收益
 */