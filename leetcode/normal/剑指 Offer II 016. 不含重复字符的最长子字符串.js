/* 
  给定一个字符串 s ，请你找出其中不含有重复字符的 最长连续子字符串 的长度。

  示例 1:

  输入: s = "abcabcbb"
  输出: 3 
  解释: 因为无重复字符的最长子字符串是 "abc"，所以其长度为 3。
  示例 2:

  输入: s = "bbbbb"
  输出: 1
  解释: 因为无重复字符的最长子字符串是 "b"，所以其长度为 1。
  示例 3:

  输入: s = "pwwkew"
  输出: 3
  解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
       请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
  示例 4:

  输入: s = ""
  输出: 0
   

  提示：

  0 <= s.length <= 5 * 104
  s 由英文字母、数字、符号和空格组成

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/wtcaE1
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let ret = 0;
  const arr = Array(26).fill(0);
  for (let l = 0, r = 0; r < s.length; r += 1) {
    const idx = s[r].charCodeAt() - 'a'.charCodeAt();
    arr[idx] += 1;
    if ((arr[idx]) === 1) {
      ret = Math.max(ret, r - l + 1);
    } else {
      while (arr[idx] >= 2) {
        arr[s[l].charCodeAt() - 'a'.charCodeAt()] -= 1;
        l += 1;
      }
    }
  }
  return ret;
};

/**
 * 如果s只包含小写字母，这样没问题
 * 但是题目  s 由英文字母、数字、符号和空格组成
 */

var lengthOfLongestSubstring = function(s) {
  let ret = 0;
  let temp = '';
  for (let i = 0; i < s.length; i += 1) {
    const idx = temp.indexOf(s[i]);
    if (idx > -1) temp = temp.substring(idx + 1);
    temp += s[i];
    ret = Math.max(ret, temp.length);
  }
  return ret;
};

/**
 * 每次都需要temp.indexOf(s[i])，可以优化
 */

var lengthOfLongestSubstring = function(s) {
  let ret = 0;
  let temp = '';
  const map = new Map();
  for (let i = 0; i < s.length; i += 1) {
    let idx;
    if (map.has(s[i])) {
      idx = map.get(s[i]);
      if (idx < i) {
        idx = temp.indexOf(s[i]);
      }
    }
    map.set(s[i], i);
    if (idx > -1) temp = temp.substring(idx + 1);
    temp += s[i];
    ret = Math.max(ret, temp.length);
  }
  return ret;
};