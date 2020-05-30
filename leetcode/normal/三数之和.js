/* 
    给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

    注意：答案中不可以包含重复的三元组。

     

    示例：

    给定数组 nums = [-1, 0, 1, 2, -1, -4]，

    满足要求的三元组集合为：
    [
    [-1, 0, 1],
    [-1, -1, 2]
    ]

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/3sum
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((p, n) => p - n);
    let L, R;
    const len = nums.length;
    let sum = 0;
    const result = [];
    for (let i = 0; i < len - 2; i += 1) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        L = i + 1;
        R = len - 1;
        while (L < R) {
            sum = nums[i] + nums[L] + nums[R];
            if (sum === 0) {
                result.push([nums[i], nums[L], nums[R]]);
            }
            if (sum <= 0) {
                L = L + 1;
                while (nums[L] === nums[L - 1]) {
                    L += 1;
                }
            } else {
                R = R - 1;
                while (nums[R] === nums[R + 1]) {
                    R -= 1;
                }
            }
        }
    }
    return result;
};

/**
 * 最暴力的解法是3次循环
 * 本质上是在一个数组选定1个数，该数和剩余的数中的2个数和为目标值
 * 排序的作用是剔除不可能的值与方便的解决不重复的问题
 */
