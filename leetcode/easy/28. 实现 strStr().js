/* 
  实现 strStr() 函数。

  给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

  示例 1:

  输入: haystack = "hello", needle = "ll"
  输出: 2
  示例 2:

  输入: haystack = "aaaaa", needle = "bba"
  输出: -1
  说明:

  当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

  对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/implement-strstr
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};


/**
 * Sunday算法
 */
var strStr = function(haystack, needle) {
  const map = [];
  for (let i = 0; i < needle.length; i += 1) map[needle[i]] = i;
  let i = 0;
  while (i + needle.length <= haystack.length) {
    let flag = 1;
    for (let j = 0; j < needle.length; j += 1) {
      if (haystack[i + j] === needle[j]) continue;
      flag = 0;
      break;
    }
    if (flag) return i;
    i += (needle.length - (map[haystack[i + needle.length]] ?? -1)); // 注意下map[i] = 0 的场景
  }
  return -1;
}

/**
 * KMP
 */
var strStr = function(haystack, needle) {
  const m = haystack.length;
  const n = needle.length;
  if (n === 0) return 0;
  const next = [0];
  for (let i = 1, j = 0; i < n; i += 1) {
    while (j > 0 && needle[j] !== needle[i]) j = next[j - 1];
    if (needle[j] === needle[i]) j += 1;
    next[i] = j;
  }

  for (let i = 0, j = 0; i < m; i += 1) {
    while (j !== 0 && haystack[i] !== needle[j]) j = next[j - 1];
    if (haystack[i] === needle[j]) j += 1;
    if (j === n) return i - n + 1;
  }
  return -1;
}

