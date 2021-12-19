/* 
  请判断一个链表是否为回文链表。

  示例 1:

  输入: 1->2
  输出: false
  示例 2:

  输入: 1->2->2->1
  输出: true
  进阶：
  你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/palindrome-linked-list
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const vals = [];

  while (head) {
    vals.push(head.val);
    head = head.next;
  }

  let start = 0;
  let end = vals.length - 1;
  while (start <= end) {
    if (vals[start] === vals[end]) {
      start += 1;
      end -= 1;
    } else {
      return false;
    }
  }
  return true;
};

/**
 * 上述方式需要额外的存储空间
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
  if (!head) return false;
  let slow = head;
  let fast = head;
  while (slow.next && fast.next?.next) {
    slow = slow.next;
    fast = fast.next?.next;
  }
  slow.next = reverse(slow.next);
  let p = head;
  let q = slow.next;
  while (p && q) {
    if (p.val !== q.val) return false;
    p = p.next;
    q = q.next;
  }
  return true;

  function reverse(head) {
    let cur = head;
    let pre;
    let temp;
    while (cur) {
      temp = cur.next;
      cur.next = pre;
      pre = cur;
      cur = temp;
    }
    return pre;
  }
};
