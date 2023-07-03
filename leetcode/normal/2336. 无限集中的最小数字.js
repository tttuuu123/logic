/* 
  现有一个包含所有正整数的集合 [1, 2, 3, 4, 5, ...] 。

  实现 SmallestInfiniteSet 类：

  SmallestInfiniteSet() 初始化 SmallestInfiniteSet 对象以包含 所有 正整数。
  int popSmallest() 移除 并返回该无限集中的最小整数。
  void addBack(int num) 如果正整数 num 不 存在于无限集中，则将一个 num 添加 到该无限集中。

  示例：

  输入
  ["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack", "popSmallest", "popSmallest", "popSmallest"]
  [[], [2], [], [], [], [1], [], [], []]
  输出
  [null, null, 1, 2, 3, null, 1, 4, 5]

  解释
  SmallestInfiniteSet smallestInfiniteSet = new SmallestInfiniteSet();
  smallestInfiniteSet.addBack(2);    // 2 已经在集合中，所以不做任何变更。
  smallestInfiniteSet.popSmallest(); // 返回 1 ，因为 1 是最小的整数，并将其从集合中移除。
  smallestInfiniteSet.popSmallest(); // 返回 2 ，并将其从集合中移除。
  smallestInfiniteSet.popSmallest(); // 返回 3 ，并将其从集合中移除。
  smallestInfiniteSet.addBack(1);    // 将 1 添加到该集合中。
  smallestInfiniteSet.popSmallest(); // 返回 1 ，因为 1 在上一步中被添加到集合中，
                                    // 且 1 是最小的整数，并将其从集合中移除。
  smallestInfiniteSet.popSmallest(); // 返回 4 ，并将其从集合中移除。
  smallestInfiniteSet.popSmallest(); // 返回 5 ，并将其从集合中移除。
   

  提示：

  1 <= num <= 1000
  最多调用 popSmallest 和 addBack 方法 共计 1000 次

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/smallest-number-in-infinite-set
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  push(v) {
    const heap = this.heap;
    heap.push(v);
    let idx = heap.length - 1;
    while (idx) {
      const parent = ~~((idx - 1) / 2);
      if (heap[idx] >= heap[parent]) break;
      this.swap(heap, idx, parent);
      idx = parent;
    }
  }

  pop() {
    const heap = this.heap;
    if (!heap.length) return -1;
    this.swap(heap, 0, heap.length - 1);
    const ret = heap.pop();
    let idx = 0;
    let child = idx * 2 + 1;
    while (child < heap.length) {
      const right = child + 1;
      if (right < heap.length && heap[child] > heap[right]) child = right;
      if (heap[idx] <= heap[child]) break;
      this.swap(heap, idx, child);
      idx = child;
      child = idx * 2 + 1;
    }
    return ret;
  }

  has(v) {
    return this.heap.includes(v);
  }
}

var SmallestInfiniteSet = function() {
  this.heap = new MinHeap();
  for (let i = 1; i <= 1000; i += 1) {
    this.heap.push(i);
  }
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
  return this.heap.pop();
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
  if (this.heap.has(num)) return;
  this.heap.push(num);
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
