/* 
  将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

  示例：

  输入：1->2->4, 1->3->4
  输出：1->1->2->3->4->4

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/merge-two-sorted-lists
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let pre = new ListNode();
  let cur = pre;
  while (l1 || l2) {
    if (!l1) {
      cur.next = l2;
      break;
    } else if (!l2) {
      cur.next = l1;
      break;
    }
    if (l1.val >= l2.val) {
      cur.next = l2;
      l2 = l2.next;
      cur = cur.next;
    } else {
      cur.next = l1;
      l1 = l1.next;
      cur = cur.next;
    }
  }
  return pre.next;
};