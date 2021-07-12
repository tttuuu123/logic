/* 
  不使用任何内建的哈希表库设计一个哈希集合（HashSet）。

  实现 MyHashSet 类：

  void add(key) 向哈希集合中插入值 key 。
  bool contains(key) 返回哈希集合中是否存在这个值 key 。
  void remove(key) 将给定值 key 从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。
   
  示例：

  输入：
  ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
  [[], [1], [2], [1], [3], [2], [2], [2], [2]]
  输出：
  [null, null, null, true, false, null, true, null, false]

  解释：
  MyHashSet myHashSet = new MyHashSet();
  myHashSet.add(1);      // set = [1]
  myHashSet.add(2);      // set = [1, 2]
  myHashSet.contains(1); // 返回 True
  myHashSet.contains(3); // 返回 False ，（未找到）
  myHashSet.add(2);      // set = [1, 2]
  myHashSet.contains(2); // 返回 True
  myHashSet.remove(2);   // set = [1]
  myHashSet.contains(2); // 返回 False ，（已移除）
   

  提示：

  0 <= key <= 106
  最多调用 104 次 add、remove 和 contains 。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/design-hashset
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


class Node {
  constructor(key = 0, next = null) {
    this.key = key;
    this.next = next;
  }

  insertAfter(node) {
    node.next = this.next;
    this.next = node;
    return;
  }

  removeAfter() {
    if (this.next === null) return;
    this.next = this.next.next;
    return;
  }
}

class MyHashSet {
  constructor() {
    this.data = [];
    for (let i = 0; i < 100; i += 1) {
      this.data.push(new Node());
    }
  }

  hashFunc(key) {
    return key & 0x7fffffff;
  }

  /**
   * Returns true if this set contains the specified element 
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    const idx = this.hashFunc(key) % this.data.length;
    let cur = this.data[idx].next;
    while (cur && cur.key !== key) {
      cur = cur.next;
    }
    return cur !== null;
  }

  /** 
   * @param {number} key
   * @return {void}
   */
  add(key) {
    if (this.contains(key)) return;
    const idx = this.hashFunc(key) % this.data.length;
    this.data[idx].insertAfter(new Node(key));
    return;
  }

  /** 
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    const idx = this.hashFunc(key) % this.data.length;
    let head = this.data[idx];
    while (head.next && head.next.key !== key) {
      head = head.next;
    }
    head.removeAfter();
    return;
  };
}


/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */