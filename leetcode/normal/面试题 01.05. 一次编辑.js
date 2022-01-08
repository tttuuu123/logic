/* 
  字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。

  示例 1:

  输入: 
  first = "pale"
  second = "ple"
  输出: True

  示例 2:

  输入: 
  first = "pales"
  second = "pal"
  输出: False

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/one-away-lcci
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
  if (Math.abs(first.length - second.length) > 1) return false;
  if (first.length === second.length) {
    for (let i = 0, j = 0; i < first.length; i += 1) {
      if (first[i] === second[i]) continue;
      j += 1;
      if (j === 2) return false;
    }
    return true;
  }
  let short = first;
  let long = second;
  if (short.length > long.length) [short, long] = [long, short];
  let i = 0, j = 0;
  while (i < short.length && j < long.length) {
    if (short[i] === long[j]) {
      i += 1;
      j += 1;
    } else {
      j += 1;
    }
  }
  return i === short.length;
};
