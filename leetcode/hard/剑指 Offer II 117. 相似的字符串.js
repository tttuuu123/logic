/* 
  如果交换字符串 X 中的两个不同位置的字母，使得它和字符串 Y 相等，那么称 X 和 Y 两个字符串相似。如果这两个字符串本身是相等的，那它们也是相似的。

  例如，"tars" 和 "rats" 是相似的 (交换 0 与 2 的位置)； "rats" 和 "arts" 也是相似的，但是 "star" 不与 "tars"，"rats"，或 "arts" 相似。

  总之，它们通过相似性形成了两个关联组：{"tars", "rats", "arts"} 和 {"star"}。注意，"tars" 和 "arts" 是在同一组中，即使它们并不相似。形式上，对每个组而言，要确定一个单词在组中，只需要这个词和该组中至少一个单词相似。

  给定一个字符串列表 strs。列表中的每个字符串都是 strs 中其它所有字符串的一个 字母异位词 。请问 strs 中有多少个相似字符串组？

  字母异位词（anagram），一种把某个字符串的字母的位置（顺序）加以改换所形成的新词。
   

  示例 1：

  输入：strs = ["tars","rats","arts","star"]
  输出：2
  示例 2：

  输入：strs = ["omv","ovm"]
  输出：1
   

  提示：

  1 <= strs.length <= 300
  1 <= strs[i].length <= 300
  strs[i] 只包含小写字母。
  strs 中的所有单词都具有相同的长度，且是彼此的字母异位词。


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/H6lPxb
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
  const len = strs.length;
  const groups = new UnionSet(len);
  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      if (check(strs[i], strs[j])) {
        groups.merge(i, j);
      }
    }
  }
  let ret = 0;
  for (let i = 0; i < len; i += 1) {
    if (groups.find(i) === i) ret += 1;
  }
  return ret;

  function check(a, b) {
    let diff = 0;
    let i = 0;
    while (i < a.length) {
      if (a[i] !== b[i]) diff += 1;
      if (diff > 2) return false;
      i += 1;
    }
    return true;
  }
};

class UnionSet {
  constructor(n) {
    this.parent = [];
    for (let i = 0; i < n; i += 1) {
      this.parent[i] = i;
    }
  }

  find(x) {
    if (this.parent[x] === x) return x;
    return this.find(this.parent[x]);
  }

  merge(a, b) {
    const fa = this.find(a);
    const fb = this.find(b);
    if (fa === fb) return;
    this.parent[fa] = fb;
  }
}

