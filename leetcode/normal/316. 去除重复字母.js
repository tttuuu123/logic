/* 
  给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

  注意：该题与 1081 https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters 相同

  示例 1：

  输入：s = "bcabc"
  输出："abc"
  示例 2：

  输入：s = "cbacdcbc"
  输出："acdb"
   

  提示：

  1 <= s.length <= 104
  s 由小写英文字母组成

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/remove-duplicate-letters
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  const map = new Map();
  for (const char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  const stack = [];
  for (let char of s) {
    map.set(char, map.get(char) - 1);
    if (!stack.includes(char)) {
      while (stack.length && stack[stack.length - 1] > char && map.get(stack[stack.length - 1])) stack.pop();
      stack.push(char);
    }
  }
  return stack.join('');
};

/**
 * 一个字母（char）是否可以入栈（stack）有几个条件：
 * 1、stack中不存在char
 * 2、讲stack中比char大的且后续还会出现的字母都弹出
 */
