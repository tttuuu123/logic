/*
  给一非空的单词列表，返回前 k 个出现次数最多的单词。

  返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。

  示例 1：

  输入: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
  输出: ["i", "love"]
  解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
      注意，按字母顺序 "i" 在 "love" 之前。
   

  示例 2：

  输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
  输出: ["the", "is", "sunny", "day"]
  解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，
      出现次数依次为 4, 3, 2 和 1 次。
   

  注意：

  假定 k 总为有效值， 1 ≤ k ≤ 集合元素数。
  输入的单词均由小写字母组成。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/top-k-frequent-words
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
import { MinHeap } from '../../structure/Heap';

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const map = {};
  for (let word of words) {
    map[word] || (map[word] = 0);
    map[word] += 1
  }
  const heap = new MinHeap();
  const idxMap = {};
  let i = 0;
  for (const [word, frequency] of Object.entries(map)) {
    heap.push(frequency);
    (idxMap[frequency] || (idxMap[frequency] = [])).push(word);
    if (i + 1 > k) heap.pop();
    i += 1;
  }
  const ret = [];
  const set = new Set(heap.value());
  for (let idx of set.values()) {
    ret.push(...idxMap[idx]);
  }
  ret.sort((a, b) => {
    if (map[a] === map[b]) return a > b ? 1 : -1;
    return map[b] - map[a];
  });
  return ret.slice(0, k);
};