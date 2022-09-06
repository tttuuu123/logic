/* 
  给定两个由一些 闭区间 组成的列表，firstList 和 secondList ，其中 firstList[i] = [starti, endi] 而 secondList[j] = [startj, endj] 。每个区间列表都是成对 不相交 的，并且 已经排序 。

  返回这 两个区间列表的交集 。

  形式上，闭区间 [a, b]（其中 a <= b）表示实数 x 的集合，而 a <= x <= b 。

  两个闭区间的 交集 是一组实数，要么为空集，要么为闭区间。例如，[1, 3] 和 [2, 4] 的交集为 [2, 3] 。

  示例 1：


  输入：firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
  输出：[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
  示例 2：

  输入：firstList = [[1,3],[5,9]], secondList = []
  输出：[]
  示例 3：

  输入：firstList = [], secondList = [[4,8],[10,12]]
  输出：[]
  示例 4：

  输入：firstList = [[1,7]], secondList = [[3,10]]
  输出：[[3,7]]
   

  提示：

  0 <= firstList.length, secondList.length <= 1000
  firstList.length + secondList.length >= 1
  0 <= starti < endi <= 109
  endi < starti+1
  0 <= startj < endj <= 109
  endj < startj+1


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/interval-list-intersections
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
  if (firstList.length === 0 || secondList.length === 0) return [];
  const ret = [];
  let i = 0;
  let j = 0;
  while (i < firstList.length && j < secondList.length) {
    const [f1, f2] = firstList[i];
    const [s1, s2] = secondList[j];
    if (f2 < s1) {
      /**
       * --
       *    --
       */
      i += 1;
    } else if (s2 < f1) {
      /**
       *    --
       * --
       */
      j += 1;
    } else if (f1 <= s1 && f2 >= s2) {
      /**
       * -----
       *  --
       */
      ret.push([s1, s2]);
      j += 1;
    } else if (s1 <= f1 && s2 >= f2) {
      /**
       *   --
       * -----
       */
      ret.push([f1, f2]);
      i += 1;
    } else if (f2 >= s1 && f2 <= s2) {
      /**
       * ---
       *  ---
       */
      ret.push([s1, f2]);
      i += 1;
    } else {
      /**
       *   ---
       * ---
       */
      ret.push([f1, s2]);
      j += 1;
    }
  }
  return ret;
};

/**
 * 枚举了所有可能性
 * 时间复杂度O(n)，空间复杂度O(1)
 */


var intervalIntersection = function(firstList, secondList) {
  if (firstList.length === 0 || secondList.length === 0) return [];
  const ret = [];
  let i = 0;
  let j = 0;
  while (i < firstList.length && j < secondList.length) {
    const first = Math.max(firstList[i][0], secondList[j][0]);
    const second = Math.min(firstList[i][1], secondList[j][1]);
    if (first <= second) ret.push([first, second]);
    if (firstList[i][1] < secondList[j][1]) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return ret;
};

/**
 * 简化一下，时间复杂度/空间复杂度不变
 */