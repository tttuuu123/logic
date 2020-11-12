/* 
  数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 

  示例：

  输入：n = 3
  输出：[
        "((()))",
        "(()())",
        "(())()",
        "()(())",
        "()()()"
      ]
  通过次数197,867提交次数258,839

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/generate-parentheses
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const ret = [];
  run('', 0, 0);
  return ret;

  function run(cur, left, right) {
    if (left === n && right === n) {
      if (check(cur)) ret.push(cur);
      return;
    }
    if (left < n) run(cur + '(', left + 1, right);
    if (right < n) run(cur + ')', left, right + 1);
  }

  function check(str) {
    const stack = [];
    for (let char of str) {
      if (char === '(') {
        stack.push(1);
      } else if (!stack.pop()) {
        return false;
      }
    }
    return true;
  }
};

/**
 * 暴力解法，回溯只在于找出所有满足条件的
 * 优化：
 * 当只有 right < left 的时候，将右括号加入cur中
 */

 /**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const ret = [];
  run('', 0, 0);
  return ret;

  function run(cur, left, right) {
    if (left === n && right === n) {
      ret.push(cur);
      return;
    }
    if (left < n) run(cur + '(', left + 1, right);
    if (right < left) run(cur + ')', left, right + 1);
  }
};