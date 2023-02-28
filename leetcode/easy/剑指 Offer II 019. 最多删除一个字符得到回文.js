/* 
  给定一个非空字符串 s，请判断如果 最多 从字符串中删除一个字符能否得到一个回文字符串。

  示例 1:

  输入: s = "aba"
  输出: true
  示例 2:

  输入: s = "abca"
  输出: true
  解释: 可以删除 "c" 字符 或者 "b" 字符
  示例 3:

  输入: s = "abc"
  输出: false
   

  提示:

  1 <= s.length <= 105
  s 由小写英文字母组成
   

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/RQku0D
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  const len = s.length;
  if (len === 1 || len === 2) return true;
  return help(0, len - 1, false);

  function help(l, r, hasDel) {
    while (l < r) {
      if (s[l] === s[r]) {
        l += 1;
        r -= 1;
      } else {
        break;
      }
    }
    if (l >= r) return true;
    if (hasDel) return false;
    return help(l + 1, r, true) || help(l, r - 1, true);
  }
};

/**
 * 删除一个字符就是当l和r不相等时，去对比[l, r - 1]或[l + 1, r]
 * 且这个对比只需要进行一次即可
 */