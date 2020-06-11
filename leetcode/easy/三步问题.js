
/* 
    三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。

    示例1:

    输入：n = 3 
    输出：4
    说明: 有四种走法
    示例2:

    输入：n = 5
    输出：13
    提示:

    n范围在[1, 1000000]之间

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/three-steps-problem-lcci
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function(n) {
    const res = [1, 2, 4];
    let i = 3;
    while (i < n) {
        res[i] = (res[i - 1] + res[i - 2] + res[i - 3]) % 1000000007;
        i += 1;
    }
    return res[n - 1];
};

/**
 * n = 1    1                                                   1
 * n = 2    1 1 | 2                                             2
 * n = 3    1 1 1 | 1 2 | 2 1 | 3                               4
 * n = 4    1 1 1 1 | 1 2 1 | 1 1 2 | 2 1 1 | 2 2 | 1 3 | 3 1   7
 * n = 5                                                        13
 * 
 * f(n) = f(n - 1) + f(n - 2) + f(n - 3)
 * 
 * 仅仅要注意n很大，导致res[n - 1] 大于 pow(2, 53)
 */