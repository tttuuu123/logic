
/* 
    给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

    示例 1:

    输入: 123
    输出: 321
     示例 2:

    输入: -123
    输出: -321
    示例 3:

    输入: 120
    输出: 21
    注意:

    假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [-2^31,  2^31 - 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/reverse-integer
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = +('' + Math.abs(x)).split('').reverse().join('');
    let flag = 1;
    if (x < 0) {
        flag = -1;
    }
    return res <= Math.pow(2, 31) ? res * flag : 0;
};

/**
 * 暴力转字符串拆分数组反转转数字判断
 */


var reverse = function(x) {
    let flag = 1;
    if (x < 0) {
        flag = -1;
    }
    let temp = Math.abs(x);
    let res = 0;
    while (temp !== 0) {
        res = res * 10 + temp % 10;
        temp = Math.floor(temp / 10);
    }
    return res <= Math.pow(2, 31) ? res * flag : 0;
};

/**
 * 直接将数字反转
 * 注意一下Math.floor(-1 / 10) === -1 负数要向上取整，所以先转换为绝对值，方便判定
 */
