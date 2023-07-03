/* 
  给你两个下标从 0 开始的整数数组 nums1 和 nums2 ，两者长度都是 n ，再给你一个正整数 k 。你必须从 nums1 中选一个长度为 k 的 子序列 对应的下标。

  对于选择的下标 i0 ，i1 ，...， ik - 1 ，你的 分数 定义如下：

  nums1 中下标对应元素求和，乘以 nums2 中下标对应元素的 最小值 。
  用公示表示： (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1]) 。
  请你返回 最大 可能的分数。

  一个数组的 子序列 下标是集合 {0, 1, ..., n-1} 中删除若干元素得到的剩余集合，也可以不删除任何元素。


  示例 1：

  输入：nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3
  输出：12
  解释：
  四个可能的子序列分数为：
  - 选择下标 0 ，1 和 2 ，得到分数 (1+3+3) * min(2,1,3) = 7 。
  - 选择下标 0 ，1 和 3 ，得到分数 (1+3+2) * min(2,1,4) = 6 。
  - 选择下标 0 ，2 和 3 ，得到分数 (1+3+2) * min(2,3,4) = 12 。
  - 选择下标 1 ，2 和 3 ，得到分数 (3+3+2) * min(1,3,4) = 8 。
  所以最大分数为 12 。
  示例 2：

  输入：nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1
  输出：30
  解释：
  选择下标 2 最优：nums1[2] * nums2[2] = 3 * 10 = 30 是最大可能分数。
   

  提示：

  n == nums1.length == nums2.length
  1 <= n <= 105
  0 <= nums1[i], nums2[j] <= 105
  1 <= k <= n

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/maximum-subsequence-score
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
  const idx = nums2.map((_, i) => i).sort((a, b) => nums2[b] - nums2[a]);
  let curNum2;
  const ins = new MinHeap();
  for (let i = 0; i < k; i += 1) {
    ins.push(nums1[idx[i]]);
    curNum2 = nums2[idx[i]];
  }
  let ret = ins.getSum() * curNum2;
  for (let i = k; i < nums1.length; i += 1) {
    curNum2 = nums2[idx[i]];
    ins.push(nums1[idx[i]]);
    ins.pop();
    ret = Math.max(ret, ins.getSum() * curNum2);
  }
  return ret;
};

class MinHeap {
  constructor() {
    this.heap = [];
    this.sum = 0;
  }

  swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  push(n) {
    const heap = this.heap;
    this.sum += n;
    heap.push(n);
    let idx = heap.length - 1;
    while (idx) {
      let parent = ~~((idx - 1) / 2);
      if (heap[idx] >= heap[parent]) break;
      this.swap(heap, idx, parent);
      idx = parent;
    }
  }

  pop() {
    const heap = this.heap;
    if (heap.length === 0) return;
    this.swap(heap, 0, heap.length - 1);
    const ret = heap.pop();
    this.sum -= ret;
    let idx = 0;
    let child = idx * 2 + 1;
    while (child < heap.length) {
      const right = child + 1;
      if (right < heap.length && heap[right] <= heap[child]) child = right;
      if (heap[idx] <= heap[child]) break;
      this.swap(heap, idx, child);
      idx = child;
      child = idx * 2 + 1;
    }
    return ret;
  }

  getSum() {
    return this.sum;
  }
}