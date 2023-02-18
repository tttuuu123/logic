/* 
  给定一个整数数组 nums 和一个整数 k ，请返回其中出现频率前 k 高的元素。可以按 任意顺序 返回答案。


  示例 1:

  输入: nums = [1,1,1,2,2,3], k = 2
  输出: [1,2]
  示例 2:

  输入: nums = [1], k = 1
  输出: [1]
   

  提示：

  1 <= nums.length <= 105
  k 的取值范围是 [1, 数组中不相同的元素的个数]
  题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的
   

  进阶：所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/g5c51o
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const temp = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (temp[nums[i]] === undefined) temp[nums[i]] = 0;
    temp[nums[i]] += 1;
  }
  const map = {};
  Object.keys(temp).forEach((key) => {
    map[temp[key]] = key;
  });
  const arr = Object.keys(map);
  const ret = [];
  for (let i = 0; i < k; i += 1) {
    ret.push(map[arr[i]]);
  }
  return ret;
};

/**
 * 利用js map数字会按索引排序的规则
 * 但是有个问题，就是第二步转换中，类似[1, 2]这样的数据，会因为都出现一次而出现问题
 */

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[[i]]];
  }

  push([key, num]) {
    const heap = this.heap;
    heap.push({
      key,
      num
    });
    let idx = heap.length - 1;
    while (idx) {
      const parent = ~~((idx - 1) / 2);
      if (heap[parent].num >= num) break;
      this.swap(heap, idx, parent);
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
      if (right < heap.length && heap[right].num >= heap[temp].num) temp = right;
      if (heap[idx].num >= heap[temp].num) break;
      this.swap(heap, idx, temp);
      idx = temp;
      temp = idx * 2 + 1;
    }
    return ret;
  }
}

var topKFrequent = function(nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  const heap = new MaxHeap();
  for (const [key, num] of map.entries()) {
    heap.push([key, num]);
  }
  const ret = [];
  for (let i = 0; i < k; i += 1) {
    const { key } = heap.pop();
    ret.push(key);
  }
  return ret;
};



/**
 * O(n log n) 直接想到堆排序
 */