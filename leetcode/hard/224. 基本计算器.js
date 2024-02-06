/* 
  给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

  注意:不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。

  示例 1：

  输入：s = "1 + 1"
  输出：2
  示例 2：

  输入：s = " 2-1 + 2 "
  输出：3
  示例 3：

  输入：s = "(1+(4+5+2)-3)+(6+8)"
  输出：23
  

  提示：

  1 <= s.length <= 3 * 105
  s 由数字、'+'、'-'、'('、')'、和 ' ' 组成
  s 表示一个有效的表达式
  '+' 不能用作一元运算(例如， "+1" 和 "+(2 + 3)" 无效)
  '-' 可以用作一元运算(即 "-1" 和 "-(2 + 3)" 是有效的)
  输入中不存在两个连续的操作符
  每个数字和运行的计算将适合于一个有符号的 32位 整数
*/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let i = 0;
  const opt = [1];
  let sign = 1;
  let ret = 0;
  while (i < s.length) {
    if (s[i] === '(') {
      opt.push(sign);
      i += 1;
    } else if (s[i] === ')') {
      opt.pop();
      i += 1;
    } else if (s[i] === '+') {
      sign = opt[opt.length - 1];
      i += 1;
    } else if (s[i] === '-') {
      sign = -opt[opt.length - 1];
      i += 1;
    } else if (s[i] === ' ') {
      i += 1;
    } else {
      let num = 0;
      while (i < s.length && s[i] !== ' ' && !isNaN(+s[i])) {
        num = num * 10 + +s[i];
        i += 1;
      }
      ret += sign * num;
    }
  }
  return ret;
};

/**
 * 表达式只涉及到 加/减
 * 所以关键在于‘去括号’
 * 如果括号前是 ‘+’，那么直接忽略
 * 如果括号前是 ‘-’，那么括号内的结果需要反转
 * 所以实际上在于记录一个括号前的 ‘+/-’ 符号标示 sign
 */