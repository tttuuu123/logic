/* 
  给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

  请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。


  示例 1:

  输入: [3,2,1,5,6,4] 和 k = 2
  输出: 5
  示例 2:

  输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
  输出: 4
   

  提示：

  1 <= k <= nums.length <= 10^4
  -104 <= nums[i] <= 10^4

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/xx4gT2
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const heap = new MinHeap();
  for (const num of nums) {
    heap.push(num);
    if (heap.size() > k) {
      heap.pop();
    }
  }

  return heap.value(0);
};

class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  push(val) {
    const heap = this.heap;
    heap.push(val);
    let idx = heap.length - 1;
    while (idx) {
      const parent = ~~((idx - 1) / 2);
      if (heap[parent] <= heap[idx]) break;
      this.swap(heap, parent, idx);
      idx = parent;
    }
  }

  pop() {
    const heap = this.heap;
    if (heap.length === 0) return null;
    this.swap(heap, 0, heap.length - 1);
    const ret = heap.pop();
    let idx = 0;
    let temp = idx * 2 + 1;
    while (temp < heap.length) {
      const right = idx * 2 + 2;
      if (right < heap.length && heap[temp] > heap[right]) temp = right;
      if (heap[idx] <= heap[temp]) break;
      this.swap(heap, idx, temp);
      idx = temp;
      temp = idx * 2 + 1;
    }
    return ret;
  }

  size() {
    return this.heap.length;
  }

  value(idx) {
    return this.heap[idx];
  }
}
