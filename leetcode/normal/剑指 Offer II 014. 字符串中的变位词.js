/* 
  给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的某个变位词。

  换句话说，第一个字符串的排列之一是第二个字符串的 子串 。

  示例 1：

  输入: s1 = "ab" s2 = "eidbaooo"
  输出: True
  解释: s2 包含 s1 的排列之一 ("ba").
  示例 2：

  输入: s1= "ab" s2 = "eidboaoo"
  输出: False
   

  提示：

  1 <= s1.length, s2.length <= 104
  s1 和 s2 仅包含小写字母


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/MPnaiL
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false;
  let arr = Array(26).fill(0);
  for (const char of s1) {
    arr[char.charCodeAt() - 'a'.charCodeAt()] += 1;
  }
  const FLAG = arr.join('');
  arr = Array(26).fill(0);
  for (let l = 0, r = 0; r < s2.length; r += 1) {
    arr[s2[r].charCodeAt() - 'a'.charCodeAt()] += 1;
    if (r - l + 1 === s1.length) {
      if (arr.join('') === FLAG) {
        return true;
      } else {
        arr[s2[l].charCodeAt() - 'a'.charCodeAt()] -= 1;
        l += 1;
      }
    }
  }
  return false;
};

/**
 * 想办法把需要对比的值固定住
 * 将s1用0～25映射为一个数字，去比对s2种有无相同子串映射的数字相等
 */