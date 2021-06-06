/* 
  给你一个数组 nums ，它包含 n 个正整数。你需要计算所有非空连续子数组的和，并将它们按升序排序，得到一个新的包含 n * (n + 1) / 2 个数字的数组。

  请你返回在新数组中下标为 left 到 right （下标从 1 开始）的所有数字和（包括左右端点）。由于答案可能很大，请你将它对 10^9 + 7 取模后返回。

  示例 1：

  输入：nums = [1,2,3,4], n = 4, left = 1, right = 5
  输出：13 
  解释：所有的子数组和为 1, 3, 6, 10, 2, 5, 9, 3, 7, 4 。将它们升序排序后，我们得到新的数组 [1, 2, 3, 3, 4, 5, 6, 7, 9, 10] 。下标从 le = 1 到 ri = 5 的和为 1 + 2 + 3 + 3 + 4 = 13 。
  示例 2：

  输入：nums = [1,2,3,4], n = 4, left = 3, right = 4
  输出：6
  解释：给定数组与示例 1 一样，所以新数组为 [1, 2, 3, 3, 4, 5, 6, 7, 9, 10] 。下标从 le = 3 到 ri = 4 的和为 3 + 3 = 6 。
  示例 3：

  输入：nums = [1,2,3,4], n = 4, left = 1, right = 10
  输出：50

  提示：

  1 <= nums.length <= 10^3
  nums.length == n
  1 <= nums[i] <= 100
  1 <= left <= right <= n * (n + 1) / 2

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/range-sum-of-sorted-subarray-sums
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
  const heap = new MinHeap();
  const mod = 1e9 + 7;
  for (let i = 0; i < n; i += 1) {
    heap.push({
      j: i,
      sum: nums[i]
    });
  }
  let ret = 0;
  for (let i = 1; i <= right; i += 1) {
    const o = heap.pop(); // 这里吐出的就是所有排序后的子序列和的第i位数据
    if (i >= left) ret = (ret + o.sum) % mod;
    if (o.j + 1 < n) heap.push({
      j: o.j + 1,
      sum: o.sum + nums[o.j + 1]
    });
  }
  return ret;
};

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(o) {
    const heap = this.heap;
    heap.push(o);
    let cur = heap.length - 1;
    let parent;
    while (cur) {
      parent = (cur - 1) >> 1;
      if (heap[cur].sum >= heap[parent].sum) break;
      swap(heap, cur, parent);
      cur = parent;
    }
  }

  pop() {
    const heap = this.heap;
    if (heap.length === 0) return;
    swap(heap, 0, heap.length - 1);
    const ret = heap.pop();
    let cur = 0;
    let child = 1;
    while (child < heap.length) {
      const right = 2 * cur + 2;
      if (right < heap.length && heap[right].sum <= heap[child].sum) child = right;
      if (heap[cur].sum <= heap[child].sum) break;
      swap(heap, cur, child);
      cur = child;
      child = cur * 2 + 1;
    }
    return ret;
  }
}