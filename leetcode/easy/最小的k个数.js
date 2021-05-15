/* 
  输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

  示例 1：

  输入：arr = [3,2,1], k = 2
  输出：[1,2] 或者 [2,1]
  示例 2：

  输入：arr = [0,1,2,1], k = 1
  输出：[0]
   
  限制：

  0 <= k <= arr.length <= 10000
  0 <= arr[i] <= 10000

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  arr.sort((a, b) => a - b);
  return arr.slice(0, k);
};


/**
 * 堆专门用来解决最值问题
 * 此题构造一个大顶堆
 */

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
class MaxHeap {
  constructor(arr = []) {
    if (!Array.isArray(arr)) {
      throw new Error('require array!');
    }
    this.heap = arr;
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
}

var getLeastNumbers = function(arr, k) {
  if (k >= arr.length) return arr;
  const ins = new MaxHeap();
  for (let i = 0; i < arr.length; i += 1) {
    ins.push(arr[i]);
    if (i === k) ins.pop();
  }
  return ins.heap;
};