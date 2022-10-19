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
  链接：https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  const heap = new MinHeap(arr);
  const ret = [];
  while (k--) {
    ret.push(heap.pop());
  }
  return ret;
};

class MinHeap {
  constructor(arr = []) {
    this.heap = [];
    arr.forEach(this.push.bind(this));
  }

  push(val) {
    const heap = this.heap;
    heap.push(val);
    let idx = heap.length - 1;
    while (idx) {
      const parent = ~~((idx - 1) / 2);
      if (heap[parent] <= heap[idx]) break;
      [heap[parent], heap[idx]] = [heap[idx], heap[parent]];
      idx = parent;
    }
    return val;
  }

  pop() {
    const heap = this.heap;
    if (!heap.length) return null;
    let idx = heap.length - 1;
    [heap[0], heap[idx]] = [heap[idx], heap[0]];
    const ret = heap.pop();
    idx = 0;
    let temp = idx * 2 + 1;
    while (temp < heap.length) {
      const right = idx * 2 + 2;
      if (right < heap.length && heap[right] < heap[temp]) temp = right;
      if (heap[idx] <= heap[temp]) break;
      [heap[idx], heap[temp]] = [heap[temp], heap[idx]];
      idx = temp;
      temp = idx * 2 + 1;
    }
    return ret;
  }
}