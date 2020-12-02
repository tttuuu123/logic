/* 
	找出数组中重复的数字。

	在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

	示例 1：

	输入：
	[2, 3, 1, 0, 2, 5, 3]
	输出：2 或 3 
	 

	限制：

	2 <= n <= 100000

	来源：力扣（LeetCode）
	链接：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof
	著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
	const map = new Map();
	for (let i = 0; i < nums.length; i += 1) {
		if (map.has(nums[i])) {
			return nums[i];
		}
		map.set(nums[i], 1);
	}
};

/**
 * 该方法需要额外的O(n)的空间
 * 可以只用额外O(1)的空间
 * 该方法会扩大原数组长度
 * 假定了元素n应当在下标n的位置，当元素n不在下标n的位置，则修正其位置到下标n
 * 如果下标n已经存在了数n，则证明重复了
 */

var findRepeatNumber = function(nums) {
	for (let i = 0; i < nums.length; i += 1) {
		const temp = nums[i];
		if (temp !== i) {
			if (temp === nums[temp]) return nums[i];
			nums[i] = nums[temp];
			nums[temp] = temp;
		}
	}
};