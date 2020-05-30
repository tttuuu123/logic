/* 
    给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

    如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

    您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

    示例：

    输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
    输出：7 -> 0 -> 8
    原因：342 + 465 = 807

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/add-two-numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const root = new ListNode(-1);
    let node = root;
    let carry = 0;
    let val;
    while (l1 || l2 || carry !== 0) {
        if ({}.toString.call(l1) === '[object Null]' && {}.toString.call(l2) === '[object Null]') {
            node.next = new ListNode(carry);
            carry = 0;
        } else if ({}.toString.call(l1) === '[object Null]') {
            val = carry + l2.val;
            carry = Math.floor(val / 10);
            node.next = new ListNode(val % 10);
            l2 = l2.next;
        } else if ({}.toString.call(l2) === '[object Null]') {
            val = carry + l1.val;
            carry = Math.floor(val / 10);
            node.next = new ListNode(val % 10);
            l1 = l1.next;
        } else {
            val = carry + l1.val + l2.val;
            carry = Math.floor(val / 10);
            node.next = new ListNode(val % 10);
            l1 = l1.next;
            l2 = l2.next;
        }
        node = node.next;
    }
    return root.next;
};

/**
 * 这种题正常情况下可以转换成数组，再转换成数字相加减，不过一般来说会碰到用例涉及到精度问题，最大值是Math.pow(2, 53)，最小值是Math.pow(2, -53)
 * 精度问题可以用字符串来解决，字符串的最大长度理论是2^53-1
 * 这道题用单链表的话，要考虑的是类似[5], [5]这种第一轮循环l1和l2都能执行，并且产生进位，但是第二轮循环l1和l2都是null了，所以循环判定里面要加上一个进位是否不为0的条件
 * 下面是上面的逻辑精简版，在leetcode上跑的话时间空间几乎没区别
 */

var addTwoNumbers = function(l1, l2) {
    const root = new ListNode(-1);
    let node = root;
    let carry = 0;
    let val;
    let val1;
    let val2;
    while (l1 || l2 || carry !== 0) {
        val1 = l1 ? l1.val : 0;
        val2 = l2 ? l2.val : 0;
        val = carry + val1 + val2;
        carry = Math.floor(val / 10);
        node.next = new ListNode(val % 10);
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        node = node.next;
    }
    return root.next;
};
