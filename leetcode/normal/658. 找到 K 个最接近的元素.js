/* 
  给定一个 排序好 的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。

  整数 a 比整数 b 更接近 x 需要满足：

  |a - x| < |b - x| 或者
  |a - x| == |b - x| 且 a < b

  示例 1：

  输入：arr = [1,2,3,4,5], k = 4, x = 3
  输出：[1,2,3,4]
  示例 2：

  输入：arr = [1,2,3,4,5], k = 4, x = -1
  输出：[1,2,3,4]

  提示：

  1 <= k <= arr.length
  1 <= arr.length <= 104
  arr 按 升序 排列
  -104 <= arr[i], x <= 104
  通过次数42,977提交次数93,677

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/find-k-closest-elements
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  let l = 0;
  let r = arr.length - 1;
  let mid;
  let ret = [];
  while (l - r >= 3) {
    mid = (l + r) >> 1;
    if (arr[mid] === x) break;
    if (arr[mid] < x) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  // 找到离x最近的那个元素的下标
  // [1,5,10]中找4时，二分会定位到mid为1（值5离4最近），实际是满足
  // [1,3]中找2时，二分会定位mid为1（值3离2和值1离2相同，但是按题意应该是1），实际就不满足了
  // 所以在最后3个元素中遍历找一下目标mid
  let temp = Infinity;
  for (let i = l; i <= r; i += 1) {
    if (Math.abs(arr[i] - x) < temp) {
      temp = Math.abs(arr[i] - x);
      mid = i;
    }
  }
  l = mid;
  r = mid + 1;
  while (k && (l >= 0 && r < arr.length)) {
    if ((x - arr[l]) <= (arr[r] - x)) {
      ret.unshift(arr[l]);
      l -= 1;
    } else {
      ret.push(arr[r]);
      r += 1;
    }
    k -= 1;
  }
  while (k && l >= 0) {
    ret.unshift(arr[l]);
    l -= 1;
    k -= 1;
  }
  while (k && r < arr.length) {
    ret.push(arr[r]);
    r += 1;
    k -= 1;
  }
  return ret;
};
