/* 
  给定一个区间的集合 intervals ，其中 intervals[i] = [starti, endi] 。返回 需要移除区间的最小数量，使剩余区间互不重叠 。

  示例 1:

  输入: intervals = [[1,2],[2,3],[3,4],[1,3]]
  输出: 1
  解释: 移除 [1,3] 后，剩下的区间没有重叠。
  示例 2:

  输入: intervals = [ [1,2], [1,2], [1,2] ]
  输出: 2
  解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
  示例 3:

  输入: intervals = [ [1,2], [2,3] ]
  输出: 0
  解释: 你不需要移除任何区间，因为它们已经是无重叠的了。
   

  提示:

  1 <= intervals.length <= 105
  intervals[i].length == 2
  -5 * 104 <= starti < endi <= 5 * 104

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/non-overlapping-intervals
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 1;
  let r = intervals[0][1];
  for (let i = 1; i < intervals.length; i += 1) {
    if (r <= intervals[i][0]) {
      count += 1;
      r = intervals[i][1];
    }
  }
  return intervals.length - count;
};

/**
 * 贪心
 * 把每个区间按照右边界由小到大排序
 * 那么排序后第一个元素因为是最早结束的，可以预留更多空间给后面的区间，所以一定是要选的
 * 那么将第一个元素的右边界视作right，后续每个区间（注意排序后后续每个区间相对后面的区间都是更快结束的，即也预留了更多空间给后面的区间）和right比较有2种可能：
 * 1、后续区间左边界和right有重叠，那么这个区间只能被去掉
 * 2、后续区间左边界和right无重叠，那么更新right为该区间的右边界
 */