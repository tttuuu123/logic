/* 
  给你一个大小为 m * n 的方阵 mat，方阵由若干军人和平民组成，分别用 1 和 0 表示。

  请你返回方阵中战斗力最弱的 k 行的索引，按从最弱到最强排序。

  如果第 i 行的军人数量少于第 j 行，或者两行军人数量相同但 i 小于 j，那么我们认为第 i 行的战斗力比第 j 行弱。

  军人 总是 排在一行中的靠前位置，也就是说 1 总是出现在 0 之前。

   

  示例 1：

  输入：mat = 
  [[1,1,0,0,0],
  [1,1,1,1,0],
  [1,0,0,0,0],
  [1,1,0,0,0],
  [1,1,1,1,1]], 
  k = 3
  输出：[2,0,3]
  解释：
  每行中的军人数目：
  行 0 -> 2 
  行 1 -> 4 
  行 2 -> 1 
  行 3 -> 2 
  行 4 -> 5 
  从最弱到最强对这些行排序后得到 [2,0,3,1,4]
  示例 2：

  输入：mat = 
  [[1,0,0,0],
   [1,1,1,1],
   [1,0,0,0],
   [1,0,0,0]], 
  k = 2
  输出：[0,2]
  解释： 
  每行中的军人数目：
  行 0 -> 1 
  行 1 -> 4 
  行 2 -> 1 
  行 3 -> 1 
  从最弱到最强对这些行排序后得到 [0,2,3,1]
   

  提示：

  m == mat.length
  n == mat[i].length
  2 <= n, m <= 100
  1 <= k <= m
  matrix[i][j] 不是 0 就是 1

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/the-k-weakest-rows-in-a-matrix
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
  let result = new Set();
  const iLen = mat[0].length;
  const jLen = mat.length;
  loop:
    for (let i = 0; i < iLen; i += 1) {
      for (let j = 0; j < jLen; j += 1) {
        if (mat[j][i] === 0) {
          result.add(j)
        }
        if (result.size === k) {
          break loop;
        }
      }
    }
  for (let j = 0; j < jLen; j += 1) {
    result.add(j)
  }
  return [...result].slice(0, k);
};

/**
 * 最直接的想法是二分法去找每行第一个0的位置，存入数组，按照这个索引顺序排序，取前k个
 * 现在按照竖着来排序，竖着搜索，那么出现第一个0的就是最小的，因为有很多特殊情况，好像不是特别好
 */