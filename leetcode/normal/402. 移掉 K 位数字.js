/* 
  给你一个以字符串表示的非负整数 num 和一个整数 k ，移除这个数中的 k 位数字，使得剩下的数字最小。请你以字符串形式返回这个最小的数字。

  示例 1 ：

  输入：num = "1432219", k = 3
  输出："1219"
  解释：移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219 。
  示例 2 ：

  输入：num = "10200", k = 1
  输出："200"
  解释：移掉首位的 1 剩下的数字为 200. 注意输出不能有任何前导零。
  示例 3 ：

  输入：num = "10", k = 2
  输出："0"
  解释：从原数字移除所有的数字，剩余为空就是 0 。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/remove-k-digits
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if (k >= num.length) return '0';
  const stack = [];
  for (let i = 0; i < num.length; i += 1) {
    while (k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k -= 1;
    }
    stack.push(num[i]);
  }
  while (k > 0) {
    stack.pop();
    k -= 1;
  }
  while (+stack[0] === 0) {
    stack.shift();
  }
  return stack.length ? stack.join('') : '0';
};

/**
 * 核心思想：尽可能让小的数字在前面
 * 所以 维护一个单调递减栈
 * 若 入栈元素小于栈顶元素
 * 则 弹出栈顶元素
 * 最多弹出k个元素
 * 栈中剩余元素即结果
 */