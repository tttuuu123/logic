/* 
  设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。

  请实现 KthLargest 类：

  KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
  int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素。

  示例：

  输入：
  ["KthLargest", "add", "add", "add", "add", "add"]
  [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
  输出：
  [null, 4, 5, 5, 8, 8]

  解释：
  KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
  kthLargest.add(3);   // return 4
  kthLargest.add(5);   // return 5
  kthLargest.add(10);  // return 5
  kthLargest.add(9);   // return 8
  kthLargest.add(4);   // return 8
   

  提示：

  1 <= k <= 104
  0 <= nums.length <= 104
  -104 <= nums[i] <= 104
  -104 <= val <= 104
  最多调用 add 方法 104 次
  题目数据保证，在查找第 k 大元素时，数组中至少有 k 个元素
   

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/jBjn9C
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.heap = new MinHeap();
  this.k = k;
  nums.forEach((num) => {
    this.add(num);
  })
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  const heap = this.heap;
  heap.push(val);
  if (heap.size() > this.k) heap.pop();
  return heap.value(0);
};

class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  value(idx) {
    if (isNaN(idx)) return this.heap;
    return this.heap[idx];
  }

  size() {
    return this.heap.length;
  }

  push(val) {
    const heap = this.heap;
    heap.push(val);
    let idx = heap.length - 1;
    while (idx) {
      const parent = ~~((idx - 1) / 2);
      if (heap[parent] <= heap[idx]) break;
      this.swap(heap, idx, parent);
      idx = parent;
    }
  }

  pop() {
    const heap = this.heap;
    if (heap.length === 0) return false;
    this.swap(heap, 0, heap.length - 1);
    const ret = heap.pop();
    let idx = 0;
    let temp = idx * 2 + 1;
    while (temp < heap.length) {
      const right = idx * 2 + 2;
      if (heap[right] <= heap[temp]) temp = right;
      if (heap[idx] <= heap[temp]) break;
      this.swap(heap, idx, temp);
      idx = temp;
      temp = idx * 2 + 1;
    }
    return ret;
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

/**
 * 因为只会增加，所以维护一个大小为k的小顶堆
 * 所以堆中第一个元素一定是第k大数值
 * 这也是优先队列
 */