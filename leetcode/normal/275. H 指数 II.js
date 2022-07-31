/* 
  给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数，citations 已经按照 升序排列 。计算并返回该研究者的 h 指数。

  h 指数的定义：h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （n 篇论文中）总共有 h 篇论文分别被引用了至少 h 次。且其余的 n - h 篇论文每篇被引用次数 不超过 h 次。

  提示：如果 h 有多种可能的值，h 指数 是其中最大的那个。

  请你设计并实现对数时间复杂度的算法解决此问题。

  示例 1：

  输入：citations = [0,1,3,5,6]
  输出：3 
  解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 0, 1, 3, 5, 6 次。
       由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3 。
  示例 2：

  输入：citations = [1,2,100]
  输出：2

  提示：

  n == citations.length
  1 <= n <= 105
  0 <= citations[i] <= 1000
  citations 按 升序排列

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/h-index-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  let l = 0;
  let r = Math.max(...citations);
  let ret = 0;
  let len = citations.length;
  while (l <= r) {
    const mid = (l + r) >>> 1;
    let temp = 0;
    for (let i = 0; i < len; i += 1) {
      if (citations[i] >= mid) {
        temp += 1;
      }
    }
    if (temp >= mid) {
      ret = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ret;
};

/**
 * 用二分加速暴力查找过程
 * 上述时间复杂度是o(NlogN)
 * 因为citations是递增的，可以加速
 */


var hIndex = function(citations) {
  let l = 1; // 防止citations.length = 1
  let r = Math.max(...citations);
  let ret = 0;
  let len = citations.length;
  while (l <= r) {
    const mid = (l + r) >>> 1;
    // 假定h = mid
    // 那么 citations[len - mid] >= mid 成立才满足题意
    if (mid <= len && citations[len - mid] >= mid) {
      ret = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ret;
};

/**
 * 这样时间复杂度就是O(logN)
 */
