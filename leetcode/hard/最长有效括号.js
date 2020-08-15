/* 
  给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。

  示例 1:

  输入: "(()"
  输出: 2
  解释: 最长有效括号子串为 "()"
  示例 2:

  输入: ")()())"
  输出: 4
  解释: 最长有效括号子串为 "()()"

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/longest-valid-parentheses
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const stack = [-1];
  let max = 0;
  for (let i in s) {
    if (s[i] === '(') {
      stack.push(+i);
      continue;
    }
    stack.pop();
    if (stack.length === 0) {
      stack.push(+i);
    } else {
      max = Math.max(max, i - stack[stack.length - 1]);
    }
  }
  return max;
};

/**
 * 在每次stack长度为0时，都将当前下标i入栈，这个i是作为参照物
 * 例如 ")()"
 * i = 0时，stack.len = 0，将i = 0 入栈
 * i = 2时，stack.len = 1（已经执行过一次出栈），这时候就将当前i与stack存放的最后一个下标相减就可以算出当前场景下最大子串长度
 */