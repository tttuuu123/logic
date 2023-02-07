/* 
  给定两个字符串 s 和 t ，编写一个函数来判断它们是不是一组变位词（字母异位词）。

  注意：若 s 和 t 中每个字符出现的次数都相同且字符顺序不完全相同，则称 s 和 t 互为变位词（字母异位词）。

  示例 1:

  输入: s = "anagram", t = "nagaram"
  输出: true
  示例 2:

  输入: s = "rat", t = "car"
  输出: false
  示例 3:

  输入: s = "a", t = "a"
  输出: false
   

  提示:

  1 <= s.length, t.length <= 5 * 104
  s and t 仅包含小写字母
   

  进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/dKk3P7
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length || s === t) return false;
  const map = new Map();
  for (const char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  for (const char of t) {
    if (map.has(char)) {
      const count = map.get(char);
      if (count === 0) return false;
      map.set(char, count - 1);
    } else {
      return false;
    }
  }
  return true;
};

/**
 * 用哈希表
 */

var isAnagram = function(s, t) {
  if (s.length !== t.length || s === t) return false;
  const arr = Array(26).fill(0);
  for (const char of s) {
    arr[char.charCodeAt() - 'a'.charCodeAt()] += 1;
  }
  for (const char of t) {
    arr[char.charCodeAt() - 'a'.charCodeAt()] -= 1;
  }
  return arr.every((num) => num === 0);
};

/**
 * 用0-25映射26个英文字母
 */