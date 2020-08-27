/* 
  给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

  由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。

  示例:

  输入: [0,1,0,2,1,0,1,3,2,1,2,1]
  输出: 6

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/trapping-rain-water
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let ret = 0;
  const stack = [];
  for (let i = 0; i < height.length; i += 1) {
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop();
      if (stack.length === 0) break;
      const dis = i - stack[stack.length - 1] - 1;
      const boundHeight = Math.min(height[i], height[stack[stack.length - 1]]) - height[top];
      ret += boundHeight * dis;
    }
    stack.push(i)
  }
  return ret;
};

/**
 * 每次ret累加的是一横排，比如idx 2~3 高度为1的和，后面再加上idx 1~4 高度为2的和
 */