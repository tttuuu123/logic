/* 
    给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
 
    示例 1:

    输入: 12258
    输出: 5
    解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
     

    提示：

    0 <= num < 231

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    const temp = '' + num;
    const len = temp.length;
    const res = new Array(len).fill(1);
    let n;
    for (let i = 1; i < len; i += 1) {
        res[i] = res[i - 1];
        n = +('' + temp[i - 1] + temp[i]);
        if (n >= 10 && n <= 25) {
            res[i] += res[i - 2] || 1;  // eg: num 为 25时 res[i - 2] 实际不存在，默认1
        }
    }
    return res[len - 1];
};

/**
 * 先假设任意2个数就可以形成一个组合
 * 那么
 * 1： 1
 * 2： 1 2， 12
 * 3： 1 2 3，12 3， 1 23
 * 4： 1 2 3 4， 12 3 4， 12 34， 1 23 4， 1 2 34 
 * 如果将第n个数看成独立的组合，那么f(n) 就是 f(n - 1)中的每种组合加上n形成的组合，组合总数与f(n - 1)相同
 * 如果将第n个数和第n-1个数看成一个组合，那么f(n)就是f(n - 2)中的每种组合加上(n-1与n)形成的组合，组合总数与f(n - 2)相同
 * 所以
 * f(n) = f(n - 1) + f(n - 2)
 * 那么n与n-1能形成一个组合的条件就是 10 <= Number((n - 1)(n)) <= 25
 */