/* 
  给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。

  示例 1：

  输入：head = [1,2,3,3,4,4,5]
  输出：[1,2,5]
  示例 2：

  输入：head = [1,1,1,2,3]
  输出：[2,3]

  提示：

  链表中节点数目在范围 [0, 300] 内
  -100 <= Node.val <= 100
  题目数据保证链表已经按升序 排列

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii
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
var deleteDuplicates = function(head) {
  const node = new ListNode(0, head);
  let pre = node;
  let cur = pre.next;
  while (cur) {
    if (cur.val !== cur.next?.val) {
      pre = pre.next;
      cur = pre.next;
      continue;
    }
    // 这一步找到的是存在重复数字节点中的最后一个节点
    while (cur && cur.val === cur.next?.val) {
      cur = cur.next;
    }
    pre.next = cur.next; // 如果题意是每种数字留下一个，就是pre.next = cur
    cur = pre?.next;
  }
  return node.next;
};
