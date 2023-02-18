/* 
  给定两个以升序排列的整数数组 nums1 和 nums2 , 以及一个整数 k 。

  定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2 。

  请找到和最小的 k 个数对 (u1,v1),  (u2,v2)  ...  (uk,vk) 。

  示例 1:

  输入: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
  输出: [1,2],[1,4],[1,6]
  解释: 返回序列中的前 3 对数：
      [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
  示例 2:

  输入: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
  输出: [1,1],[1,1]
  解释: 返回序列中的前 2 对数：
       [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
  示例 3:

  输入: nums1 = [1,2], nums2 = [3], k = 3 
  输出: [1,3],[2,3]
  解释: 也可能序列中所有的数对都被返回:[1,3],[2,3]
   

  提示:

  1 <= nums1.length, nums2.length <= 104
  -109 <= nums1[i], nums2[i] <= 109
  nums1, nums2 均为升序排列
  1 <= k <= 1000


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/qn8gGX
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  const heap = new MinHeap();
  for (let i = 0; i < nums1.length; i += 1) {
    for (let j = 0; j < nums2.length; j += 1) {
      heap.push({
        sum: nums1[i] + nums2[j],
        value: [nums1[i], nums2[j]]
      })
    }
  }
  const ret = [];
  while (k--) {
    const data = heap.pop();
    if (data) ret.push(data.value);
    
  }
  return ret;
};

class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  push(data) {
    const heap = this.heap;
    heap.push(data);
    let idx = heap.length - 1;
    while (idx) {
      const parent = ~~((idx - 1) / 2);
      if (heap[parent].sum <= heap[idx].sum) break;
      this.swap(heap, idx, parent);
      idx = parent;
    }
  }

  pop() {
    const heap = this.heap;
    if (heap.length === 0) return false;
    this.swap(heap, idx, heap.length - 1);
    const ret = heap.pop();
    let idx = 0;
    let temp = idx * 2 + 1;
    while (temp < heap.length) {
      const right = idx * 2 + 2;
      if (right < heap.length && heap[right].sum <= heap[temp].sum) temp = right;
      if (heap[idx].sum <= heap[temp].sum) break;
      this.swap(heap, idx, temp);
      idx = temp;
      temp = idx * 2 + 1;
    }
    return ret;
  }
}