
/* 
    判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

    示例 1:

    输入: 121
    输出: true
    示例 2:

    输入: -121
    输出: false
    解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
    示例 3:

    输入: 10
    输出: false
    解释: 从右向左读, 为 01 。因此它不是一个回文数。
    进阶:

    你能不将整数转为字符串来解决这个问题吗？

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/palindrome-number
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    if ((x % 10 === 0) && x !== 0) return false;
    let prev = x;
    let next = 0;
    while (prev > next) {
        next = next * 10 + prev % 10;
        prev = Math.floor(prev / 10);
    }
    return next === prev || Math.floor(next / 10) === prev;
};

/**
 * 将正整数后半段反转与前半段比较是否相等，并将奇数考虑进去
 * 同时要注意，当x末位位0，则其首位也必须为0，只有0满足条件
 */
