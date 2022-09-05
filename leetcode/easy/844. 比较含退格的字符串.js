/* 
  给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。

  注意：如果对空文本输入退格字符，文本继续为空。

  示例 1：

  输入：s = "ab#c", t = "ad#c"
  输出：true
  解释：s 和 t 都会变成 "ac"。
  示例 2：

  输入：s = "ab##", t = "c#d#"
  输出：true
  解释：s 和 t 都会变成 ""。
  示例 3：

  输入：s = "a#c", t = "b"
  输出：false
  解释：s 会变成 "c"，但 t 仍然是 "b"。
   

  提示：

  1 <= s.length, t.length <= 200
  s 和 t 只含有小写字母以及字符 '#'
   

  进阶：

  你可以用 O(n) 的时间复杂度和 O(1) 的空间复杂度解决该问题吗？

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/backspace-string-compare
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  const s1 = [];
  const s2 = [];
  for (const char of s) {
    if (char === '#') {
      s1.pop();
    } else {
      s1.push(char);
    }
  }
  for (const char of t) {
    if (char === '#') {
      s2.pop();
    } else {
      s2.push(char);
    }
  }
  return s1.join('') === s2.join('');
};

/**
 * 这满足O(n)的时间（时间复杂度为O(s.length + t.length)）
 * 但是不满足O(1)的空间
 */


var backspaceCompare = function(s, t) {
  let i = s.length - 1;
  let j = t.length - 1;
  while (i >= 0 || j >= 0) {
    if (s[i] === '#') {
      i = help(s, i - 1, 1);
    }
    if (t[j] === '#') {
      j = help(t, j - 1, 1);
    }
    
    // i 和 j 可能会 小于 0，但是js数组里这样idx下标对应的值是undefined，利用这个性质依旧可以比较
    if (s[i] !== t[j]) return false;
    i -= 1;
    j -= 1;
  }
  return true;

  // 返回最近的有效位数
  function help(str, idx, num) {
    while (idx >= 0 && num > 0) {
      if (str[idx] === '#') {
        num += 1;
      } else {
        num -= 1;
      }
      idx -= 1;
    }
    // a#b# 这样的字符串需要继续递归
    if (str[idx] === '#') return help(str, idx - 1, 1);
    return idx;
  }
};

/**
 * 用双指针+递归来实现，这样只需要O(1)的额外空间
 */