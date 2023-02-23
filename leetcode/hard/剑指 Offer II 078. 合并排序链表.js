/* 
  给定一个链表数组，每个链表都已经按升序排列。

  请将所有链表合并到一个升序链表中，返回合并后的链表。

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
  链接：https://leetcode.cn/problems/vvXgSW
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
  if (lists.length === 0) return null;
  lists.sort((a, b) => a?.val - b?.val);
  const pre = new ListNode(null);
  let temp = pre; 
  let j = 0;
  while (true) {
    let cur;
    for (let i = 0; i < lists.length; i += 1) {
      if (!lists[i]) continue;
      if (!cur) {
        cur = lists[i];
        j = i;
        continue;
      }
      if (cur.val > lists[i].val) {
        cur = lists[i];
        j = i;
      }
    }
    if (!cur) break;
    const next = cur.next;
    cur.next = null;
    temp.next = cur;
    lists[j] = next;
    temp = temp.next;
  }
  return pre.next;
};

/**
 * 也可以用堆排序做个优先队列，把所有节点入队这样，性能会更好
 */