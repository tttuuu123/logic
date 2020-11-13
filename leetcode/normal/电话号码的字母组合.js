/* 
  给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

  给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

  2: abc
  3: def
  4: ghi
  5: jkl
  6: mno
  7: pqrs
  8: tuv
  9: wxyz

  示例:

  输入："23"
  输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
  说明:
  尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const ret = [];
  const total = [];
  for (let num of digits) {
    total.push(map[num]);
  }

  run('', total);

  return ret;

  function run(curStr, remainArr) {
    if (curStr.length === digits.length) {
      ret.push(curStr);
      return;
    }
    const arr = [...remainArr];
    const str = arr.shift();
    for (let char of str) {
      run(curStr + char, arr);
    }
  }
};

/**
 * 回溯：某一组数的每一个都要和剩余的其他内容结合一次
 * 递归：每次取出剩余中的一组，将组内每个内容去和剩余的结合
 */
