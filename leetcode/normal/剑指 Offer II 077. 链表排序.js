/* 
  给定链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

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
  -10^5 <= Node.val <= 10^5

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/7WHec2
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
  const arr = [];
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = null;
    arr.push({ ...cur });
    cur = next;
  }
  arr.sort((a, b) => a.val - b.val);
  const pre = new ListNode(null);
  let temp = pre;
  for (let i = 0; i < arr.length; i += 1) {
    temp.next = arr[i];
    temp = temp.next;
  }
  return pre.next;
};