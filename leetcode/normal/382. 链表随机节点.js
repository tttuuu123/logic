/* 
  给定一个单链表，随机选择链表的一个节点，并返回相应的节点值。保证每个节点被选的概率一样。

  进阶:
  如果链表十分大且长度未知，如何解决这个问题？你能否使用常数级空间复杂度实现？

  示例:

  // 初始化一个单链表 [1,2,3].
  ListNode head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  Solution solution = new Solution(head);

  // getRandom()方法应随机返回1,2,3中的一个，保证每个元素被返回的概率相等。
  solution.getRandom();

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/linked-list-random-node
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.arr = [];
  let cur = head;
  while (cur) {
    this.arr.push(cur.val);
    cur = cur.next;
  }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  return this.arr[~~(Math.random() * this.arr.length)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */


/**
 * 无法达到常数级时间复杂度
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
  let p = head;
  let q;
  let len = 0;
  while (p) {
    q = p;
    p = p.next;
    len += 1;
  }
  q.next = head; // 让链表首尾成环
  this.len = len;
  this.head = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  let target = ~~(Math.random() * this.len);
  while (target) {
    this.head = this.head.next;
    target -= 1;
  }
  return this.head.val;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */