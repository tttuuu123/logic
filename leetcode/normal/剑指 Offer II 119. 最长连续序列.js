/* 
  给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

  示例 1：

  输入：nums = [100,4,200,1,3,2]
  输出：4
  解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
  示例 2：

  输入：nums = [0,3,7,2,5,8,4,6,0,1]
  输出：9
   

  提示：

  0 <= nums.length <= 104
  -109 <= nums[i] <= 109
   

  进阶：可以设计并实现时间复杂度为 O(n) 的解决方案吗？

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/WhsWhI
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const map = new Map();
  const connection = new UnionSet(nums.length);
  for (let i = 0; i < nums.length; i += 1) {
    if (map.has(nums[i])) continue;
    const prev = nums[i] - 1;
    const next = nums[i] + 1;
    if (map.has(prev)) connection.merge(map.get(prev), i);
    if (map.has(next)) connection.merge(map.get(next), i);
    map.set(nums[i], i);
  }

  let ret = 0;
  for (let i = 0; i < nums.length; i += 1) {
    ret = Math.max(ret, connection.getSize(i));
  }
  return ret;
};

class UnionSet {
  constructor(n) {
    this.parent = [];
    this.size = [];
    for (let i = 0; i < n; i += 1) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }

  find(x) {
    if (this.parent[x] === x) return x;
    return this.find(this.parent[x]);
  }

  merge(a, b) {
    const fa = this.find(a);
    const fb = this.find(b);
    if (fa === fb) return;
    this.parent[fa] = fb;
    this.size[fb] += this.size[fa];
  }

  getSize(x) {
    return this.size[this.find(x)];
  }
}