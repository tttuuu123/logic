/* 
  给定单链表的头节点 head ，请反转链表，并返回反转后的链表的头节点。

  示例 1：


  输入：head = [1,2,3,4,5]
  输出：[5,4,3,2,1]
  示例 2：


  输入：head = [1,2]
  输出：[2,1]
  示例 3：

  输入：head = []
  输出：[]
   

  提示：

  链表中节点的数目范围是 [0, 5000]
  -5000 <= Node.val <= 5000

  进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/UHnkqh
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  const pre = new ListNode();
  while (head) {
    const next = pre.next;
    const node = new ListNode(head.val, next);
    pre.next = node;
    head = head.next;
  }
  return pre.next;
};

var reverseList = function(head) {
  let pre = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};

/**
 * 迭代
 */
