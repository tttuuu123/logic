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
  链接：https://leetcode-cn.com/problems/merge-intervals
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let arr = [];
  for (const [a, b] of intervals) {
    arr.push([a, 1]);
    arr.push([b, -1]);
  }
  arr = arr.sort(([a1, b1], [a2, b2]) => {
    return (a1 - a2) || (b2 - b1);
  });
  const ret = [];
  let cnt = 0;
  let l = -1;
  for (const [a, b] of arr) {
    if (cnt === 0) l = a;
    cnt += b;
    if (cnt === 0) {
      ret.push([l, a]);
    }
  }
  return ret;
};

/**
 * arr = [[1,4],[4,5]]
 * 将arr处理为[[1,1],[4,-1],[4,1],[5,-1]]这样左侧值对应1，右侧对应-1
 * 将arr按照左侧由小到大，右侧由大到小排序[[1,1],[4,1],[4,-1],[5,-1]]
 * 则当右侧和为0时，代表完全覆盖区间
 */
