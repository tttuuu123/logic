function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// 大顶堆
export class MaxHeap {
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

  value() {
    return this.heap;
  }
}

// 小顶堆
export class MinHeap {
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

  value() {
    return this.heap;
  }

  top() {
    return this.heap[0];
  }
}
