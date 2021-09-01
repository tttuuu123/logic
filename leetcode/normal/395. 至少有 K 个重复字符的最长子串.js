/* 
  给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串， 要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。

  示例 1：

  输入：s = "aaabb", k = 3
  输出：3
  解释：最长子串为 "aaa" ，其中 'a' 重复了 3 次。
  示例 2：

  输入：s = "ababbc", k = 2
  输出：5
  解释：最长子串为 "ababb" ，其中 'a' 重复了 2 次， 'b' 重复了 3 次。

  提示：

  1 <= s.length <= 104
  s 仅由小写英文字母组成
  1 <= k <= 105

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/longest-substring-with-at-least-k-repeating-characters
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  const cnt = {};
  for (const char of s) {
    if (isNaN(cnt[char])) cnt[char] = 0;
    cnt[char] += 1;
  }
  const splitPoints = [];
  for (let i = 0; s[i]; i += 1) {
    if (cnt[s[i]] < k) splitPoints.push(i);
  }
  splitPoints.push(s.length);
  if (splitPoints.length === 1) return s.length;
  let prePoint = 0; // 记录每次的起始位置
  let ret = 0;
  for (const point of splitPoints) {
    const len = point - prePoint;
    if (len >= k) {
      ret = Math.max(ret, longestSubstring(s.substr(prePoint, len), k));
    }
    prePoint = point + 1;
  }
  return ret;
};

/**
 * 分治
 * 分割点是s中字母和小于目标k的节点
 */
