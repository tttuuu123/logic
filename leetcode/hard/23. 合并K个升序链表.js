/* 
  给你一个链表数组，每个链表都已经按升序排列。

  请你将所有链表合并到一个升序链表中，返回合并后的链表。

  示例 1：

  输入：lists = [[1,4,5],[1,3,4],[2,6]]
  输出：[1,1,2,3,4,4,5,6]
  解释：链表数组如下：
  [
    1->4->5,
    1->3->4,
    2->6
  ]
  将它们合并到一个有序链表中得到。
  1->1->2->3->4->4->5->6
  示例 2：

  输入：lists = []
  输出：[]
  示例 3：

  输入：lists = [[]]
  输出：[]
   
  提示：

  k == lists.length
  0 <= k <= 10^4
  0 <= lists[i].length <= 500
  -10^4 <= lists[i][j] <= 10^4
  lists[i] 按 升序 排列
  lists[i].length 的总和不超过 10^4

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/merge-k-sorted-lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const pre = new ListNode();
  let min = Infinity;
  let minIdx = -1;
  let cur = pre;
  while (true) {
    for (let i = 0; i < lists.length; i += 1) {
      if (!lists[i]) continue;
      if (lists[i].val < min) {
        min = lists[i].val;
        minIdx = i;
      }
    }
    if (minIdx !== -1) {
      cur.next = lists[minIdx];
      cur = cur.next;
      lists[minIdx] = lists[minIdx].next;
      min = Infinity;
      minIdx = -1;
    } else {
      break;
    }
  }
  return pre.next;
};

/**
 * 上面的时间复杂度为O(n^2)
 * 用归并排序的思想优化 O(nlogN)
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) return null;
  return run(lists);
}

function run(arr, l = 0, r= arr.length - 1) {
  if (l >= r) return arr[l];
  const mid = (l + r) >> 1;
  let lNode = run(arr, l, mid);
  let rNode = run(arr, mid + 1, r);
  const pre = new ListNode();
  let cur = pre;
  while (lNode || rNode) {
    if (!rNode || (lNode && lNode.val < rNode.val)) {
      cur.next = lNode;
      lNode = lNode.next;
    } else {
      cur.next = rNode;
      rNode = rNode.next
    }
    cur = cur.next;
  }
  return pre.next;
}