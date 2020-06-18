
/* 
    给定一个整数数组，找出总和最大的连续数列，并返回总和。

    示例：

    输入： [-2,1,-3,4,-1,2,1,-5,4]
    输出： 6
    解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/contiguous-sequence-lcci
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let temp = 0;
    let res = nums[0];
    for (let i = 0; i < nums.length; i += 1) {
        temp += nums[i];
        res = Math.max(res, temp);
        if (temp < 0) {
            temp = 0;
        }
    }
    return res;
};

/**
 * 当temp（当前最大和）小于0时，将temp置为0，重新开始计算（即将前面的负数不加入最大和的计算）
 */