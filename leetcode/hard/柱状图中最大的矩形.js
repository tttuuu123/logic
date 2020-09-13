/* 
  给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

  求在该柱状图中，能够勾勒出来的矩形的最大面积。


  柱状图的每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。


  图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。


  示例:

  输入: [2,1,5,6,2,3]
  输出: 10

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/largest-rectangle-in-histogram
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const h = [0, ...heights, 0];
  const stack = [0];
  let tempTop;
  let max = 0;
  for (let i = 1; i < h.length; i += 1) {
    while (h[i] < h[stack[stack.length - 1]]) {
      tempTop = stack.pop();
      max = Math.max(max, h[tempTop] * (i - stack[stack.length - 1] - 1));
    }
    stack.push(i);
  }
  return max;
};

/**
 * 想出加挡板0的人牛逼
 */