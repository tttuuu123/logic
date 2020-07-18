/* 
  反转链表
  反转一个单链表。

  示例:

  输入: 1->2->3->4->5->NULL
  输出: 5->4->3->2->1->NULL
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
var reverseList = function(head) {
  const temp = [];
  let h = head.next;
  while (h) {
    temp.push(h);
    h = h.next;
  }
  const preHead = new ListNode(null);
  let pre = preHead;
  temp.reverse().forEach((node) => {
    pre.next = node;
    pre = pre.next;
  });
  return preHead.next;
};