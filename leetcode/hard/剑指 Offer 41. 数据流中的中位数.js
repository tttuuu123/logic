/* 
  如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

  例如，

  [2,3,4] 的中位数是 3

  [2,3] 的中位数是 (2 + 3) / 2 = 2.5

  设计一个支持以下两种操作的数据结构：

  void addNum(int num) - 从数据流中添加一个整数到数据结构中。
  double findMedian() - 返回目前所有元素的中位数。
  示例 1：

  输入：
  ["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
  [[],[1],[2],[],[3],[]]
  输出：[null,null,null,1.50000,null,2.00000]
  示例 2：

  输入：
  ["MedianFinder","addNum","findMedian","addNum","findMedian"]
  [[],[2],[],[3],[]]
  输出：[null,null,2.00000,null,2.50000]
   

  限制：

  最多会对 addNum、findMedian 进行 50000 次调用。

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.minHeap = new MinHeap();
  this.maxHeap = new MaxHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  this.maxHeap.push(num);
  this.minHeap.push(this.maxHeap.pop());
  if (this.maxHeap.length() + 1 < this.minHeap.length()) {
    this.maxHeap.push(this.minHeap.pop());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  if (this.minHeap.length() === this.maxHeap.length()) {
    return (this.minHeap.top() + this.maxHeap.top()) / 2;
  } else {
    return this.minHeap.top();
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

 function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// 大顶堆
class MaxHeap {
  constructor(arr = []) {
    if (!Array.isArray(arr)) {
      throw new Error('require array!');
    }
    this.heap = [];
    arr.forEach(this.push.bind(this));
  }

  push(n) {
    const heap = this.heap;
    heap.push(n);
    // 向上调整
    let idx = heap.length - 1;
    while (idx) {
      const parent = ~~((idx - 1) / 2);
      if (heap[idx] <= heap[parent]) break;
      swap(heap, idx, parent);
      idx = parent;
    }
  }

  pop() {
    const heap = this.heap;
    if (heap.length === 0) return;
    swap(heap, 0, heap.length - 1);
    const ret = heap.pop();
    // 向下调整
    let idx = 0;
    let temp = idx * 2 + 1;
    while (temp < heap.length) {
      const right = idx * 2 + 2;
      if (right < heap.length && heap[right] > heap[temp]) temp = right;
      if (heap[idx] >= heap[temp]) break;
      swap(heap, idx, temp);
      idx = temp;
      temp = idx * 2 + 1;
    }
    return ret;
  }

  length() {
    return this.heap.length;
  }

  top() {
    return this.heap[0];
  }
}

// 小顶堆
class MinHeap {
  constructor(arr = []) {
    if (!Array.isArray(arr)) {
      throw new Error('require array!');
    }
    this.heap = [];
    arr.forEach(this.push.bind(this));
  }

  push(n) {
    const heap = this.heap;
    heap.push(n);
    let idx = heap.length - 1;
    while (idx) {
      const parent = ~~((idx - 1) / 2);
      if (heap[idx] >= heap[parent]) break;
      swap(heap, idx, parent);
      idx = parent;
    }
  }

  pop() {
    const heap = this.heap;
    if (heap.length === 0) return;
    swap(heap, 0, heap.length - 1);
    const ret = heap.pop();
    let idx = 0;
    let temp = idx * 2 + 1;
    while (temp < heap.length) {
      const right = idx * 2 + 2;
      if (right < heap.length && heap[right] <= heap[temp]) temp = right;
      if (heap[idx] <= heap[temp]) break;
      swap(heap, idx, temp);
      idx = temp;
      temp = idx * 2 + 1;
    }
    return ret;
  }

  length() {
    return this.heap.length;
  }

  top() {
    return this.heap[0];
  }
}
