/* 
  给定一个链表的 头节点 head ，请判断其是否为回文链表。

  如果一个链表是回文，那么链表节点序列从前往后看和从后往前看是相同的。


  示例 1：

  输入: head = [1,2,3,3,2,1]
  输出: true
  示例 2：


  输入: head = [1,2]
  输出: false
   

  提示：

  链表 L 的长度范围为 [1, 105]
  0 <= node.val <= 9
   

  进阶：能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/aMhZSa
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let slow = head;
  let fast = head;
  // 找出中间点
  // 若链表节点数是奇数，那么slow就是中间点
  // 若链表节点数是偶数，那么slow就是中间2个节点的后一个
  let temp = null;
  while (fast) {
    temp = slow;
    slow = slow.next;
    if (fast.next) {
      fast = fast.next.next;
    } else {
      fast = null;
    }
  }
  // 把head的后半段舍去
  temp.next = null;
  // 从slow开始反转链表
  let pre = null;
  let cur = slow;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  // 比对
  // 这里分2种场景
  // 若链表是奇数，那么pre的节点数 = head剩余节点数 + 1
  // 若链表是偶数，那么pre的节点数 = head的剩余节点数
  // 但是若链表是[1]，那么pre是null，所以还是要加上pre是否存在的判断
  while (head && pre) {
    if (head.val !== pre.val) return false;
    head = head.next;
    pre = pre.next;
  }
  return true;
};