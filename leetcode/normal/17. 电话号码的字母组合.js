/* 
  给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

  给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。


  示例 1：

  输入：digits = "23"
  输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
  示例 2：

  输入：digits = ""
  输出：[]
  示例 3：

  输入：digits = "2"
  输出：["a","b","c"]
   

  提示：

  0 <= digits.length <= 4
  digits[i] 是范围 ['2', '9'] 的一个数字。


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/letter-combinations-of-a-phone-number
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return [];
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };
  const ret = [];
  dfs([], 0);
  return ret;

  function dfs(arr, i) {
    if (i === digits.length) {
      ret.push(arr.join(''));
      return;
    }
    for (const char of map[digits[i]]) {
      arr.push(char);
      dfs(arr, i + 1);
      arr.pop();
    }
  }
};