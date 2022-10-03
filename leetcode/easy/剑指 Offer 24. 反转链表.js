/* 
  定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

  示例:

  输入: 1->2->3->4->5->NULL
  输出: 5->4->3->2->1->NULL
   

  限制：

  0 <= 节点个数 <= 5000

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
  const pre = new ListNode(null);
  while (head) {
    const next = pre.next;
    const temp = new ListNode(head.val);
    next && (temp.next = next);
    pre.next = temp;
    head = head.next;
  }
  return pre.next;
};

var reverseList = function(head) {
  let cur = head;
  let pre = null;
  while (cur) {
    const temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
};