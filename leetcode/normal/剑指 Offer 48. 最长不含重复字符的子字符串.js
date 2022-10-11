/* 
  请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

  示例 1:

  输入: "abcabcbb"
  输出: 3 
  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
  示例 2:

  输入: "bbbbb"
  输出: 1
  解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
  示例 3:

  输入: "pwwkew"
  输出: 3
  解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
       请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
   

  提示：

  s.length <= 40000

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let temp = '';
  let max = 0;
  for (const char of s) {
    const idx = temp.indexOf(char);
    temp += char;
    if (idx !== - 1) {
      temp = temp.substring(idx + 1, temp.length);
    }
    max = Math.max(max, temp.length);
  }
  return max;
};

/**
 * 这种题还是滑动窗口更合适
 */
var lengthOfLongestSubstring = function(s) {
  let ret = 0;
  const set = new Set();
  for (let i = 0, j = 0; j < s.length; j += 1) {
    const char = s[j];
    while (set.has(char)) {
      set.delete(s[i]);
      i += 1;
    }
    set.add(char);
    ret = Math.max(ret, j - i + 1);
  }
  return ret;
};