/* 
  给定一个字符串数组 words，请计算当两个字符串 words[i] 和 words[j] 不包含相同字符时，它们长度的乘积的最大值。假设字符串中只包含英语的小写字母。如果没有不包含相同字符的一对字符串，返回 0。

  示例 1:

  输入: words = ["abcw","baz","foo","bar","fxyz","abcdef"]
  输出: 16 
  解释: 这两个单词为 "abcw", "fxyz"。它们不包含相同字符，且长度的乘积最大。
  示例 2:

  输入: words = ["a","ab","abc","d","cd","bcd","abcd"]
  输出: 4 
  解释: 这两个单词为 "ab", "cd"。
  示例 3:

  输入: words = ["a","aa","aaa","aaaa"]
  输出: 0 
  解释: 不存在这样的两个单词。
   

  提示：

  2 <= words.length <= 1000
  1 <= words[i].length <= 1000
  words[i] 仅包含小写字母


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/aseY1I
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  const arr = Array(words.length).fill(0);
  const charA = 'a'.charCodeAt();
  for (let i = 0; i < words.length; i += 1) {
    for (const char of words[i]) {
      arr[i] |= 1 << (char.charCodeAt() - charA);
    }
  }
  let ret = 0;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if ((arr[i] & arr[j]) === 0) {
        ret = Math.max(ret, words[i].length * words[j].length);
      }
    }
  }
  return ret;
};

/**
 * 将a～z映射为0～25
 * 那么如果2个字符串不包含相同元素，那么对应的二进制元素执行&操作后一定为0
 */