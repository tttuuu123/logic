/*     
    在由若干 0 和 1  组成的数组 A 中，有多少个和为 S 的非空子数组。

    示例：

    输入：A = [1,0,1,0,1], S = 2
    输出：4
    解释：
    如下面黑体所示，有 4 个满足题目要求的子数组：
    [1,0,1,0,1]
    [1,0,1,0,1]
    [1,0,1,0,1]
    [1,0,1,0,1]
     

    提示：

    A.length <= 30000
    0 <= S <= A.length
    A[i] 为 0 或 1

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/binary-subarrays-with-sum
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function(A, S) {
    const len = A.length;
    let sum;
    let result = 0;
    for (let i = 0; i < A.length; i += 1) {
        sum = A[i];
        if (sum === S) result += 1;
        for (let j = i + 1; j < A.length; j += 1) {
            sum += A[j];
            if (sum === S) result += 1;
            if (sum > S) break;
        }
    }
    return result;
};