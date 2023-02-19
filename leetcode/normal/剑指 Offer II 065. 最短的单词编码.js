/* 
  单词数组 words 的 有效编码 由任意助记字符串 s 和下标数组 indices 组成，且满足：

  words.length == indices.length
  助记字符串 s 以 '#' 字符结尾
  对于每个下标 indices[i] ，s 的一个从 indices[i] 开始、到下一个 '#' 字符结束（但不包括 '#'）的 子字符串 恰好与 words[i] 相等
  给定一个单词数组 words ，返回成功对 words 进行编码的最小助记字符串 s 的长度 。

  示例 1：

  输入：words = ["time", "me", "bell"]
  输出：10
  解释：一组有效编码为 s = "time#bell#" 和 indices = [0, 2, 5] 。
  words[0] = "time" ，s 开始于 indices[0] = 0 到下一个 '#' 结束的子字符串，如加粗部分所示 "time#bell#"
  words[1] = "me" ，s 开始于 indices[1] = 2 到下一个 '#' 结束的子字符串，如加粗部分所示 "time#bell#"
  words[2] = "bell" ，s 开始于 indices[2] = 5 到下一个 '#' 结束的子字符串，如加粗部分所示 "time#bell#"
  示例 2：

  输入：words = ["t"]
  输出：2
  解释：一组有效编码为 s = "t#" 和 indices = [0] 。
   

  提示：

  1 <= words.length <= 2000
  1 <= words[i].length <= 7
  words[i] 仅由小写字母组成

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/iSwD2y
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  const trie = new Trie();
  for (const word of words) {
    trie.insert(word);
  }
  let ret = 0;
  for (const word of words) {
    const node = trie.search(word);
    if (Object.keys(node).length === 0) {
      ret += word.length + 1;
      node.hasUse = true; // 针对['time', 'time', 'time'] 这类数据处理
    }
  }
  return ret;
};

class Trie {
  constructor() {
    this.children = {};
  }

  insert(word) {
    let node = this.children;
    for (let i = word.length - 1; i >= 0; i -= 1) {
      if (!node[word[i]]) node[word[i]] = {};
      node = node[word[i]];
    }
  }

  search(word) {
    let node = this.children;
    for (let i = word.length - 1; i >= 0; i -= 1) {
      node = node[word[i]];
    }
    return node;
  }
}

/**
 * 本质就是对后缀相同的单词去重
 * 用字典书存储后缀
 */