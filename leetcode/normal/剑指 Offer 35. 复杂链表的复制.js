/* 
  请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

  示例 1：

  输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
  输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
  示例 2：

  输入：head = [[1,1],[2,1]]
  输出：[[1,1],[2,1]]
  示例 3：

  输入：head = [[3,null],[3,0],[3,null]]
  输出：[[3,null],[3,0],[3,null]]
  示例 4：

  输入：head = []
  输出：[]
  解释：给定的链表为空（空指针），因此返回 null。
   

  提示：

  -10000 <= Node.val <= 10000
  Node.random 为空（null）或指向链表中的节点。
  节点数目不超过 1000 。


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/fu-za-lian-biao-de-fu-zhi-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null;
  let cur = head;
  while (cur) {
    const temp = new Node(cur.val);
    temp.next = cur.next;
    cur.next= temp;
    cur = cur.next.next;
  }
  cur = head;
  while (cur) {
    if (cur.random) {
      // random 节点也需要复制为指向原节点random节点的后一位
      cur.next.random = cur.random.next;
    }
    cur = cur.next.next;
  }

  const pre = new Node(null);
  cur = head;
  pre.next = head.next;
  let copy = head.next;;
  while (cur) {
    cur.next = cur.next.next;  
    cur = cur.next;
    if (copy.next) {
        copy.next = copy.next?.next;
        copy = copy.next;
    }
  }
  return pre.next;
};