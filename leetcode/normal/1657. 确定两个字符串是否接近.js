/* 
    如果可以使用以下操作从一个字符串得到另一个字符串，则认为两个字符串 接近 ：

  操作 1：交换任意两个 现有 字符。
  例如，abcde -> aecdb
  操作 2：将一个 现有 字符的每次出现转换为另一个 现有 字符，并对另一个字符执行相同的操作。
  例如，aacabb -> bbcbaa（所有 a 转化为 b ，而所有的 b 转换为 a ）
  你可以根据需要对任意一个字符串多次使用这两种操作。

  给你两个字符串，word1 和 word2 。如果 word1 和 word2 接近 ，就返回 true ；否则，返回 false 。
   

  示例 1：

  输入：word1 = "abc", word2 = "bca"
  输出：true
  解释：2 次操作从 word1 获得 word2 。
  执行操作 1："abc" -> "acb"
  执行操作 1："acb" -> "bca"
  示例 2：

  输入：word1 = "a", word2 = "aa"
  输出：false
  解释：不管执行多少次操作，都无法从 word1 得到 word2 ，反之亦然。
  示例 3：

  输入：word1 = "cabbba", word2 = "abbccc"
  输出：true
  解释：3 次操作从 word1 获得 word2 。
  执行操作 1："cabbba" -> "caabbb"
  执行操作 2："caabbb" -> "baaccc"
  执行操作 2："baaccc" -> "abbccc"
  示例 4：

  输入：word1 = "cabbba", word2 = "aabbss"
  输出：false
  解释：不管执行多少次操作，都无法从 word1 得到 word2 ，反之亦然。
   

  提示：

  1 <= word1.length, word2.length <= 105
  word1 和 word2 仅包含小写英文字母

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/determine-if-two-strings-are-close
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  if (word1.length !== word2.length) return false;
  const map1 = new Map();
  for (const char of word1) {
    if (!map1.has(char)) {
      map1.set(char, 1);
    } else {
      map1.set(char, map1.get(char) + 1);
    }
  }
  const map2 = new Map();
  for (const char of word2) {
    if (!map1.has(char)) return false;
    if (!map2.has(char)) {
      map2.set(char, 1);
    } else {
      map2.set(char, map2.get(char) + 1);
    }
  }
  return [...map1.values()].sort((a, b) => a - b).join('') === [...map2.values()].sort((a, b) => a - b).join('');
};

/**
 * 1、2个字符串长度相同
 * 2、2个字符串出现的字母的种数相同，例如都是['a', 'b']
 * 3、2个字符串中字母出现次数的数组排序后相同，例如都是[1, 2]
 * 
 * 实际可以转换为 word1中字母出现次数 减去 word2中字母出现次数
 * 最终把相减后每个字母出现次数求和，如果是0就满足条件
 */