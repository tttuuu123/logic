/* 
  请根据每日 气温 列表 temperatures ，重新生成一个列表，要求其对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

  示例 1:

  输入: temperatures = [73,74,75,71,69,72,76,73]
  输出: [1,1,4,2,1,1,0,0]
  示例 2:

  输入: temperatures = [30,40,50,60]
  输出: [1,1,1,0]
  示例 3:

  输入: temperatures = [30,60,90]
  输出: [1,1,0]
   

  提示：

  1 <= temperatures.length <= 105
  30 <= temperatures[i] <= 100
   

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/iIQa4I
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const stack = [];
  let ret = Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i += 1) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const prevDay = stack.pop();
      ret[prevDay] = i - prevDay;
    }
    stack.push(i);
  }
  return ret;
};

/**
 * 维护一个单调递减栈
 * 栈中存放的下标代表天数，栈中对应天数的气温是递减的
 * 若碰到当前气温小于栈顶元素，那么当前天数进栈，并且当前ret[i]仍是0，因为没找到
 * 如果当前气温大于栈顶元素，那么栈顶元素弹出，并且栈顶元素对应的prevDay需要i - prevDay才可以观察到更高的气温
 */