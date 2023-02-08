/* 
  给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。


  示例 1：

  输入：timePoints = ["23:59","00:00"]
  输出：1
  示例 2：

  输入：timePoints = ["00:00","23:59","00:00"]
  输出：0
   

  提示：

  2 <= timePoints <= 2 * 104
  timePoints[i] 格式为 "HH:MM"

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/569nqc
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  const MAX_SEC = 24 * 60;
  if (timePoints.length > MAX_SEC) return 0;
  const arr = Array(MAX_SEC).fill(0);
  for (const time of timePoints) {
    const [hour, sec] = time.split(':');
    const transferSec = +hour * 60 + +sec;
    if (arr[transferSec]) return 0;
    arr[transferSec] += 1;
  }

  let prev = null;
  let min = Infinity;
  let first = null;
  let last = null;
  for (let i = 0; i < MAX_SEC; i += 1) {
    if (!arr[i]) continue;
    if (prev === null) {
      first = i;
      prev = i;
      continue;
    }
    min = Math.min(min, i - prev);
    prev = i;
    last = Math.max(last, i);
  }
  min = Math.min(min, first + MAX_SEC - last);
  
  return min;
};

/**
 * 一天24小时最多划分为 24 * 60 长度的数组
 * 将 timePoints 映射为数组，这样相当于对 timePoints 进行一个排序
 * 那么结果一定是数组中有值的场景下 相邻 或者 首尾 的差值
 */