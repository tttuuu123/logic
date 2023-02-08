/* 
  给定一个字符串数组 strs ，将 变位词 组合在一起。 可以按任意顺序返回结果列表。

  注意：若两个字符串中每个字符出现的次数都相同，则称它们互为变位词。


  示例 1:

  输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
  输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
  示例 2:

  输入: strs = [""]
  输出: [[""]]
  示例 3:

  输入: strs = ["a"]
  输出: [["a"]]
   

  提示：

  1 <= strs.length <= 104
  0 <= strs[i].length <= 100
  strs[i] 仅包含小写字母


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/sfvd7V
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const ret = [];
  const arr = [];
  for (const str of strs) {
    const temp = Array(26).fill(0);
    for (const char of str) {
      temp[char.charCodeAt() - 'a'.charCodeAt()] += 1;
    }
    arr.push(temp.join(''));
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (!arr[i]) continue;
    const temp = [strs[i]];
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] === arr[i]) {
        temp.push(strs[j]);
        arr[j] = null;
      }
    }
    ret.push(temp);
  }
  return ret;
};

/**
 * 映射的方式只能对字母数量不超过9有效
 * 比如["bdddddddddd","bbbbbbbbbbc"]就会误判
 * 所以不行
 */

var groupAnagrams = function(strs) {
  const map = new Map();
  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');
    const list = map.has(sortedStr) ? map.get(sortedStr) : [];
    list.push(str);
    map.set(sortedStr, list);
  }
  return Array.from(map.values());
};