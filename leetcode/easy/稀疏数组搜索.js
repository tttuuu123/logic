/* 
  稀疏数组搜索。有个排好序的字符串数组，其中散布着一些空字符串，编写一种方法，找出给定字符串的位置。

  示例1:

  输入: words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ta"
  输出：-1
  说明: 不存在返回-1。
  示例2:

  输入：words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ball"
  输出：4
  提示:

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/sparse-array-search-lcci
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function(words, s) {
  let left = 0;
  let right = words.length - 1;
  let mid;
  let temp;
  while (left <=right) {
    while (words[left] === '') left += 1;
    while (words[right] === '') right -= 1;
    mid = (left + right) >> 1;
    while (words[mid] === '' && mid < right) mid += 1;
    if (words[mid] === s) return mid;
    if (words[mid] > s) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};