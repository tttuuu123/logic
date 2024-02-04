/* 
  给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

  请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

  示例 1：

  输入：nums = [100,4,200,1,3,2]
  输出：4
  解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
  示例 2：

  输入：nums = [0,3,7,2,5,8,4,6,0,1]
  输出：9
  

  提示：

  0 <= nums.length <= 105
  -109 <= nums[i] <= 109
*/

class UnionSet {
  constructor(n) {
    this.parent = [];
    this.size = [];
    for (let i = 0; i < n; i += 1) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }

  find(v) {
    if (this.parent[v] === v) return v;
    this.parent[v] = this.find(this.parent[v]);
    return this.parent[v];
  }

  merge(a, b) {
    const fa = this.find(a);
    const fb = this.find(b);
    if (fa === fb) return;
    this.parent[fa] = fb;
    this.size[fb] += this.size[fa];
  }

  getSize() {
    return this.size;
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0;
  const ins = new UnionSet(nums.length);
  const map = new Map();
  for (const i in nums) {
    const num = nums[i];
    if (map.has(num)) continue;
    map.set(num, i);
    if (map.has(num - 1)) {
      ins.merge(i, map.get(num - 1));
    }
    if (map.has(num + 1)) {
      ins.merge(i, map.get(num + 1));
    }
  }
  return Math.max(...ins.getSize());
};

/**
 * 并查集
 */