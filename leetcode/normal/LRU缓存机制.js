/* 
  运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。

  获取数据 get(key) - 如果关键字 (key) 存在于缓存中，则获取关键字的值（总是正数），否则返回 -1。
  写入数据 put(key, value) - 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字/值」。
  当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

  进阶:

  你是否可以在 O(1) 时间复杂度内完成这两种操作？


  示例:

  LRUCache cache = new LRUCache( 2 );

  cache.put(1, 1);
  cache.put(2, 2);
  cache.get(1);       // 返回  1
  cache.put(3, 3);    // 该操作会使得关键字 2 作废
  cache.get(2);       // 返回 -1 (未找到)
  cache.put(4, 4);    // 该操作会使得关键字 1 作废
  cache.get(1);       // 返回 -1 (未找到)
  cache.get(3);       // 返回  3
  cache.get(4);       // 返回  4

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/lru-cache
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.max = capacity;
  this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.map.has(key)) {
    const val = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, val);
    return val;
  }
  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    this.map.delete(key);
  }
  if (this.map.size === this.max) {
    this.map.delete(this.map.keys().next().value);
  }
  this.map.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */