/* 
  给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

  你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

  

  示例:

  给定 1->2->3->4, 你应该返回 2->1->4->3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let fast = head ? next.next : null;
  let slow = head;
  const pre = new ListNode(null);
  let cur = pre;
  while (slow) {
    console.log(slow)
    if (fast) {
      cur.next = new ListNode(fast.val);
      cur = cur.next;
    }
    cur.next = new ListNode(slow.val);
    cur = cur.next;
    slow = fast ? fast.next : null;
    fast = slow ? slow.next: null;
  }
  return pre.next;
};
