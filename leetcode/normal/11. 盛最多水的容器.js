/* 
  给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

  找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

  返回容器可以储存的最大水量。

  说明：你不能倾斜容器。
   

  示例 1：

  输入：[1,8,6,2,5,4,8,3,7]
  输出：49 
  解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
  示例 2：

  输入：height = [1,1]
  输出：1
   

  提示：

  n == height.length
  2 <= n <= 105
  0 <= height[i] <= 104

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/container-with-most-water
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0;
  let j = height.length - 1;
  let ret = 0;
  while (i < j) {
    if (height[i] < height[j]) {
      ret = Math.max(ret, height[i] * (j - i));
      i += 1;
    } else {
      ret = Math.max(ret, height[j] * (j - i));
      j -= 1;
    }
  }
  return ret;
};

/**
 * 随着宽度变化，高度也会随之变化
 * 那么当宽度变小，高度必须要变大，面积才可能变大
 * 所以每次都留下长高
 */