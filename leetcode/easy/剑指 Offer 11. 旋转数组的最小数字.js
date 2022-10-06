/* 
  把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

  给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为 1。  

  注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

  示例 1：

  输入：numbers = [3,4,5,1,2]
  输出：1
  示例 2：

  输入：numbers = [2,2,2,0,1]
  输出：0
   

  提示：

  n == numbers.length
  1 <= n <= 5000
  -5000 <= numbers[i] <= 5000
  numbers 原来是一个升序排序的数组，并进行了 1 至 n 次旋转

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  const len = numbers.length;
  let l = 0;
  let r = len - 1;
  let ret = Math.min(numbers[l], numbers[r]);
  while (numbers[l] === numbers[0]) l += 1;
  while (numbers[r] === numbers[len - 1]) r -= 1;
  if (l < len && r >= 0) {
    const lVal = numbers[l];
    const rVal = numbers[r];
    while (l < r) {
      const mid = (l + r) >> 1;
      if (numbers[mid] > rVal) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
    ret = Math.min(ret, numbers[l]);
  }
  return ret;
};