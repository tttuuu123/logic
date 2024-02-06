/* 
  给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

  示例 1：


  输入：head = [1,2,3,4,5], left = 2, right = 4
  输出：[1,4,3,2,5]
  示例 2：

  输入：head = [5], left = 1, right = 1
  输出：[5]
  

  提示：

  链表中节点数目为 n
  1 <= n <= 500
  -500 <= Node.val <= 500
  1 <= left <= right <= n

  进阶： 你可以使用一趟扫描完成反转吗？
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  const dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let pre = dummyNode;
  for (let i = 0; i < left - 1; i += 1) {
    pre = pre.next;
  }
  
  let rightNode = pre;
  for (let i = 0; i < right - left + 1; i += 1) {
    rightNode = rightNode.next;
  }

  let leftNode = pre.next;
  let succ = rightNode.next;

  pre.next = null;
  rightNode.next = null;

  reverse(leftNode);

  pre.next = rightNode;
  leftNode.next = succ;
  return head;

  function reverse(head) {
    let pre = null;
    let cur = head;
    let temp;
    while (cur) {
      temp = cur.next;
      cur.next = pre;
      pre = cur;
      cur = temp;
    }
  }
};