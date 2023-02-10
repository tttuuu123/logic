/* 
  给定非负整数数组 heights ，数组中的数字用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

  求在该柱状图中，能够勾勒出来的矩形的最大面积。


  示例 1:

  输入：heights = [2,1,5,6,2,3]
  输出：10
  解释：最大的矩形为图中红色区域，面积为 10
  示例 2：



  输入： heights = [2,4]
  输出： 4
   

  提示：

  1 <= heights.length <=105
  0 <= heights[i] <= 104


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/0ynMMM
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let max = -Infinity;
  const stack = [-1];
  for (let i = 0; i < heights.length; i += 1) {
    while (stack.length > 1 && heights[i] <= heights[stack[stack.length - 1]]) {
      const prevIdx = stack.pop();
      max = Math.max(max, heights[prevIdx] * (i - stack[stack.length - 1] - 1))
    }
    stack.push(i);
  }
  // 栈中如果还剩下一些元素（不包含哨兵）
  // 这些元素的右边界就是 heights.length，对应的高度无限
  // 左边界就是栈中当前元素前一个
  while (stack.length > 1) {
    const prevIdx = stack.pop();
    const height = heights[prevIdx];
    const width = heights.length - stack[stack.length - 1] - 1;
    max = Math.max(max, height * width);
  }
  return max;
};

/**
 * 如果固定高度a，那么就是要找到a左右两侧比a第一个比a小的高度下表[i, j]
 * 那么说明[i + 1, j - 1] 这个区间内所有柱子高度都大于 heights[a]
 * 那么面积就是 height[a] * ((j - 1) - (i + 1) + 1)
 * 也就是 height[a] * (j - i - 1)
 * 
 * 维护一个单调递增栈stack
 * 若当前元素j和栈顶元素a，有 heights[j] <= heights[a]，即当前元素高度小于栈顶元素高度
 * 那么以栈顶元素a固定高度heights[a]，向左右两侧找第一个比heights[a]小的下标[i, j]，
 * 右侧因为有 height[j] <= height[a]了，所以右侧能找到的最远下标就是 j - 1
 * 左侧的最远下标就是 栈中栈顶元素a 的前一个元素i，因为是单调递增的，一定有 height[i] < height[a]，所以左侧能找到的最远下标就是i + 1
 * 那么以栈顶元素a作为固定高，最大面积就是 height[a] * (j - i - 1)
 * 
 * 换而言之，其实每次是当栈顶元素出栈的时候，用栈顶元素对应的高度作为固定高，去求最大面积
 * 并且根据题意，下标-1 和下标heights.length 可以看作是一个无限高的墙
 * 所以栈中第一个元素可以放入一个-1的哨兵，高度无限
 */