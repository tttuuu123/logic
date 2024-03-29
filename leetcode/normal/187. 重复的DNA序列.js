/* 
  所有 DNA 都由一系列缩写为 'A'，'C'，'G' 和 'T' 的核苷酸组成，例如："ACGAATTCCG"。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。

  编写一个函数来找出所有目标子串，目标子串的长度为 10，且在 DNA 字符串 s 中出现次数超过一次。

  示例 1：

  输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
  输出：["AAAAACCCCC","CCCCCAAAAA"]
  示例 2：

  输入：s = "AAAAAAAAAAAAA"
  输出：["AAAAAAAAAA"]
   

  提示：

  0 <= s.length <= 105
  s[i] 为 'A'、'C'、'G' 或 'T'

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/repeated-dna-sequences
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  const map = {};
  for (let i = 0; i < s.length - 9; i += 1) {
    const str = s.substr(i, 10);
    if (isNaN(map[str])) map[str] = 0;
    map[str] += 1;
  }
  const ret = [];
  Object.keys(map).forEach((key) => {
    if (map[key] > 1) ret.push(key);
  });
  return ret;
};