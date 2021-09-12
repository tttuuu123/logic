/* 
  实现RandomizedSet 类：

  RandomizedSet() 初始化 RandomizedSet 对象
  bool insert(int val) 当元素 val 不存在时，向集合中插入该项，并返回 true ；否则，返回 false 。
  bool remove(int val) 当元素 val 存在时，从集合中移除该项，并返回 true ；否则，返回 false 。
  int getRandom() 随机返回现有集合中的一项（测试用例保证调用此方法时集合中至少存在一个元素）。每个元素应该有 相同的概率 被返回。
  你必须实现类的所有函数，并满足每个函数的 平均 时间复杂度为 O(1) 。

  示例：

  输入
  ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
  [[], [1], [2], [2], [], [1], [2], []]
  输出
  [null, true, false, true, 2, true, false, 2]

  解释
  RandomizedSet randomizedSet = new RandomizedSet();
  randomizedSet.insert(1); // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
  randomizedSet.remove(2); // 返回 false ，表示集合中不存在 2 。
  randomizedSet.insert(2); // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
  randomizedSet.getRandom(); // getRandom 应随机返回 1 或 2 。
  randomizedSet.remove(1); // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
  randomizedSet.insert(2); // 2 已在集合中，所以返回 false 。
  randomizedSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
   

  提示：

  -231 <= val <= 231 - 1
  最多调用 insert、remove 和 getRandom 函数 2 * 105 次
  在调用 getRandom 方法时，数据结构中 至少存在一个 元素。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/insert-delete-getrandom-o1
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.map = new Map();
  this.arr = [];
  this.size = 0;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map.has(val)) return false;
  this.arr.push(val);
  this.map.set(val, this.size);
  this.size += 1;
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.map.has(val)) return false;
  const curIdx = this.map.get(val);
  const lastIdx = this.size - 1;
  [this.arr[curIdx], this.arr[lastIdx]] = [this.arr[lastIdx], this.arr[curIdx]];
  this.map.set(this.arr[curIdx], curIdx);
  this.arr.pop();
  this.map.delete(val);
  this.size -= 1;
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  if (this.size >= 0) {
    const random = ~~(Math.random() * this.size);
    return this.arr[Math.random() * 100 % this.size];
  }
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
