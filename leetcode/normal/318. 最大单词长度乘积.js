/* 
  给定一个字符串数组 words，找到 length(word[i]) * length(word[j]) 的最大值，并且这两个单词不含有公共字母。你可以认为每个单词只包含小写字母。如果不存在这样的两个单词，返回 0。

  示例 1:

  输入: ["abcw","baz","foo","bar","xtfn","abcdef"]
  输出: 16 
  解释: 这两个单词为 "abcw", "xtfn"。
  示例 2:

  输入: ["a","ab","abc","d","cd","bcd","abcd"]
  输出: 4 
  解释: 这两个单词为 "ab", "cd"。
  示例 3:

  输入: ["a","aa","aaa","aaaa"]
  输出: 0 
  解释: 不存在这样的两个单词。
   

  提示：

  2 <= words.length <= 1000
  1 <= words[i].length <= 1000
  words[i] 仅包含小写字母

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/maximum-product-of-word-lengths
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  const mark = new Array(words.length).fill(0);
  const codeA = 'a'.charCodeAt();
  for (let i = 0; i < words.length; i += 1) {
    for (let letter of words[i]) {
      mark[i] |= (1 << (letter.charCodeAt() - codeA));
    }
  }

  let ans = 0;
  for (let i = 0; i < words.length; i += 1) {
    for (let j = i + 1; j < words.length; j += 1) {
      if (mark[i] & mark[j]) continue;
      ans = Math.max(ans, words[i].length * words[j].length);
    }
  }
  return ans;
};

/**
 * 核心优化是将words中每个word预处理成26位二进制，映射26个字母，若某一位位1，则代表word中有这个字母
 */