/* 
  给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

  进阶：

  你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？

  示例 1：

  输入：head = [4,2,1,3]
  输出：[1,2,3,4]
  示例 2：


  输入：head = [-1,5,3,4,0]
  输出：[-1,0,3,4,5]
  示例 3：

  输入：head = []
  输出：[]

  提示：

  链表中节点的数目在范围 [0, 5 * 104] 内
  -105 <= Node.val <= 105

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/sort-list
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
var sortList = function(head) {
  if (!head) return;
  let cur = head.next;
  let max = head.val;
  let min = head.val;
  while (cur) {
    if (max < cur.val) max = cur.val;
    if (min > cur.val) min = cur.val;
    cur = cur.next;
  }
  if (max === min) return head; // 核心的退出递归条件
  const base = (max + min) >> 1;
  let smallerHead = null;
  let biggerHead = null;
  let temp;
  cur = head;
  while (cur) {
    temp = cur.next;
    if (cur.val > base) {
      cur.next = biggerHead;
      biggerHead = cur;
    } else {
      cur.next = smallerHead;
      smallerHead = cur;
    }
    cur = temp;
  }
  biggerHead = sortList(biggerHead);
  smallerHead = sortList(smallerHead);
  cur = smallerHead;
  while (cur.next) cur = cur.next;
  cur.next = biggerHead;
  return smallerHead;
};

/**
 * 有点快排的分治思想
 * 每次把链表分为大于base的一段和小于base的一段
 * 最终把两段拼接起来
 */