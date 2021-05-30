/* 
  设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。

  示例：

  输入： arr = [1,3,5,7,2,4,6,8], k = 4
  输出： [1,2,3,4]
  提示：

  0 <= len(arr) <= 100000
  0 <= k <= min(100000, len(arr))


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/smallest-k-lcci
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}


function getMid(a, b, c) {
  if (a >= b && a <= c) return a;
  if (b >= a && b <= c) return b;
  return c;
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function(arr, k) {
  run(0, arr.length - 1, k);
  return arr.slice(0, k);

  function run(left, right, target) {
    let l = left;
    let r = right;
    if (l >= r) return;
    const base = getMid(arr[l], arr[(l + r) >> 1], arr[r]);
    while (l <= r) {
      while (arr[l] < base) l += 1;
      while (arr[r] > base) r -= 1;
      if (l <= r) {
        swap(arr, l, r);
        l += 1;
        r -= 1;
      }
    }
    if (r - left + 1 === target) return;
    if (r - left >= target) {
      run(left, r, target);
    } else {
      run(l, right, target - (l - left));
    }
  }
};
