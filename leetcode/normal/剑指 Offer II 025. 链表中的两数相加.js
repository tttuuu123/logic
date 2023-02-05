/* 
  给定两个 非空链表 l1和 l2 来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

  可以假设除了数字 0 之外，这两个数字都不会以零开头。

  示例1：

  输入：l1 = [7,2,4,3], l2 = [5,6,4]
  输出：[7,8,0,7]
  示例2：

  输入：l1 = [2,4,3], l2 = [5,6,4]
  输出：[8,0,7]
  示例3：

  输入：l1 = [0], l2 = [0]
  输出：[0]
   

  提示：

  链表的长度范围为 [1, 100]
  0 <= node.val <= 9
  输入数据保证链表代表的数字无前导 0
   
  进阶：如果输入链表不能修改该如何处理？换句话说，不能对列表中的节点进行翻转。

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/lMSNwu
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
var addTwoNumbers = function(l1, l2) {
  let nL1 = reverse(l1);
  let nL2 = reverse(l2);
  let carry = 0;
  let pre = new ListNode(null);
  while (nL1 && nL2) {
    const sum = nL1.val + nL2.val + carry;
    carry = ~~(sum / 10);
    pre.next = new ListNode(sum % 10, pre.next);
    nL1 = nL1.next;
    nL2 = nL2.next;
  }
  while (nL1) {
    const sum = nL1.val + carry;
    carry = ~~(sum / 10);
    pre.next = new ListNode(sum % 10, pre.next);
    nL1 = nL1.next;
  }
  while (nL2) {
    const sum = nL2.val + carry;
    carry = ~~(sum / 10);
    pre.next = new ListNode(sum % 10, pre.next);
    nL2 = nL2.next;
  }
  if (carry) {
    pre.next = new ListNode(1, pre.next)
  }
  return pre.next;


  function reverse(head) {
    let pre = null;
    let cur = head;
    while (cur) {
      const next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    return pre;
  }
};

/**
 * 先反转链表
 */

var addTwoNumbers = function(l1, l2) {
  const stack1 = [];
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  const stack2 = [];
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  let pre = new ListNode(null);
  let carry = 0;
  while (stack1.length || stack2.length || carry) {
    const n1 = stack1.length ? stack1.pop() : 0;
    const n2 = stack2.length ? stack2.pop() : 0;
    const sum = n1 + n2 + carry;
    pre.next = new ListNode(sum % 10, pre.next);
    carry = ~~(sum / 10);
  }
  return pre.next;
};

/**
 * 用栈记录val
 */