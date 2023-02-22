/* 
  以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。


  示例 1：

  输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
  输出：[[1,6],[8,10],[15,18]]
  解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
  示例 2：

  输入：intervals = [[1,4],[4,5]]
  输出：[[1,5]]
  解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
   

  提示：

  1 <= intervals.length <= 104
  intervals[i].length == 2
  0 <= starti <= endi <= 104

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/SsGoHC
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const ret = [];
  for (const [b0, b1] of intervals) {
    if (!ret.length) {
      ret.push([b0, b1]);
      continue;
    }
    const [a0, a1] = ret[ret.length - 1];
    if (a1 < b0) {
      ret.push([b0, b1]);
    } else if (a1 >= b1) {
      continue;
    } else {
      ret[ret.length - 1][1] = b1;
    }
  }
  return ret;
};

/**
 * 对数组按照第一个元素排序
 * 那么排序后数组中前后2个元素[a0, a1], [b0, b1]
 * 必然有 a0 >= b0
 * 若 a1 < b0 那么这2个元素不能合并（不重叠）
 * 若 a1 >= b1 那么a元素已经包含b元素的区间（完全重叠）
 * 剩下就是 这2个区间可以合并（部分重叠）
 */