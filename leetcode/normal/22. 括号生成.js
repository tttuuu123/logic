/* 
  数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

  示例 1：

  输入：n = 3
  输出：["((()))","(()())","(())()","()(())","()()()"]
  示例 2：

  输入：n = 1
  输出：["()"]
   

  提示：

  1 <= n <= 8

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/generate-parentheses
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const ret = [];
  dfs([], [], n);
  return ret;

  function dfs(arr, stack, num) {
    if (num === 0 && stack.length > 0) {
      while (stack.length > 0) {
        arr.push(')');
        stack.pop();
      }
    }
    if (num === 0 && stack.length === 0) {
      ret.push(arr.join(''));
      return;
    }
    // 放 '('
    let temp = [...stack, 0];
    dfs([...arr, '('], temp, num - 1);
    if (stack.length !== 0) {
      // 放 ')'
      temp = [...stack];
      temp.pop();
      dfs([...arr, ')'], temp, num);
    }
  }
};

var generateParenthesis = function(n) {
  const ret = [];
  dfs([], [], n);
  return ret;

  function dfs(arr, stack, num) {
    if (num === 0) {
      // 这里有个坑，如果直接修改arr和stack
      // 回溯的时候因为引用类型的关系，回溯后arr和stack的值不对
      let i = stack.length;
      const temp = [...arr];
      while (i--) {
        temp.push(')');
      }
      ret.push(temp.join(''));
      return;
    }
    // 放 '('
    stack.push(0);
    arr.push('(');
    dfs(arr, stack, num - 1);
    arr.pop();
    stack.pop();

    if (stack.length !== 0) {
      // 放 ')'
      stack.pop();
      arr.push(')');
      dfs(arr, stack, num);
      arr.pop();
      stack.push(0)
    }
    
  }
};

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
