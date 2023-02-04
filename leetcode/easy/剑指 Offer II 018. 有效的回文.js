/* 
  给定一个字符串 s ，验证 s 是否是 回文串 ，只考虑字母和数字字符，可以忽略字母的大小写。

  本题中，将空字符串定义为有效的 回文串 。

  示例 1:

  输入: s = "A man, a plan, a canal: Panama"
  输出: true
  解释："amanaplanacanalpanama" 是回文串
  示例 2:

  输入: s = "race a car"
  输出: false
  解释："raceacar" 不是回文串
   

  提示：

  1 <= s.length <= 2 * 105
  字符串 s 由 ASCII 字符组成

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/XltzEq
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const reg = /[a-z]|[A-Z]|[0-9]/;
  let l = 0; r = s.length - 1;
  while (l < r) {
    while (!reg.test(s[l])) l += 1;
    while (!reg.test(s[r])) r -= 1;
    if (l > r) return true;
    if (s[l].toLowerCase() === s[r].toLowerCase()) {
      l += 1;
      r -= 1;
    } else {
      return false;
    }
  }
  return true;
};