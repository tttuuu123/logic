/* 
  在字典（单词列表） wordList 中，从单词 beginWord 和 endWord 的 转换序列 是一个按下述规格形成的序列：

  序列中第一个单词是 beginWord 。
  序列中最后一个单词是 endWord 。
  每次转换只能改变一个字母。
  转换过程中的中间单词必须是字典 wordList 中的单词。
  给定两个长度相同但内容不同的单词 beginWord 和 endWord 和一个字典 wordList ，找到从 beginWord 到 endWord 的 最短转换序列 中的 单词数目 。如果不存在这样的转换序列，返回 0。

  示例 1：

  输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
  输出：5
  解释：一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。
  示例 2：

  输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
  输出：0
  解释：endWord "cog" 不在字典中，所以无法进行转换。
   

  提示：

  1 <= beginWord.length <= 10
  endWord.length == beginWord.length
  1 <= wordList.length <= 5000
  wordList[i].length == beginWord.length
  beginWord、endWord 和 wordList[i] 由小写英文字母组成
  beginWord != endWord
  wordList 中的所有字符串 互不相同

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/om3reC
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) === -1) return 0;
  let ret = 0;
  const canVisited = new Set(wordList);
  let set = new Set([beginWord]);
  let flag = true;
  while (flag) {
    ret += 1;
    const temp = new Set();
    for (const word1 of set) {
      if (compare(word1, endWord)) {
        flag = false;
        break;
      };
      for (const word2 of canVisited) {
        if (compare(word1, word2)) {
          temp.add(word2);
        }
      }
      for (const word of temp) {
        canVisited.delete(word);
      }
      set = temp;
    }
  }
  return flag ? 0 : ret + 1;
  
  function compare(a, b) {
    let i = 0;
    let diff = 0;
    while (i < beginWord.length) {
      if (a[i] !== b[i]) {
        diff += 1;
        if (diff >= 2) return false;
      }
      i += 1;
    }
    return diff === 1;
  }
};

/**
 * 暴力解，会超时
 * 从 beginWord 出发，枚举出 beginWord 可以演变出的单词数组
 * 用上一轮枚举出的单词数组中的单词和 endWord 对比
 * 如果不能变为 endWord，就继续从剩下没枚举到的单词数组中找 该单词 可以演变出的数组
 */