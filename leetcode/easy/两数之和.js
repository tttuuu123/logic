
/* 
    给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。


    示例:

    给定 nums = [2, 7, 11, 15], target = 9

    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/two-sum
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    const result = [];
    nums.some((n, i) => {
        if ((target - n) in map) {
            result.push(map[target - n], i);
            return true;
        }
        map[n] = i;
        return false;
    });
    return result;
};

/**
 * 最暴力的方式就是2次遍历
 * 但只要涉及到数组就要考虑是是否能用一个对象来接收数组中的数据，kv可以是数组的idx/val，这样后续操作会方便
 * 所以用一个map接收遍历过的nums，k是val，v是idx
 * 这样只要用target-currentNum，检测差值是否在map中存在即可
 */