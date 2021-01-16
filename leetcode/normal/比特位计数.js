/* 
  给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。

  示例 1:

  输入: 2
  输出: [0,1,1]
  示例 2:

  输入: 5
  输出: [0,1,1,2,1,2]
  进阶:

  给出时间复杂度为O(n*sizeof(integer))的解答非常容易。但你可以在线性时间O(n)内用一趟扫描做到吗？
  要求算法的空间复杂度为O(n)。
  你能进一步完善解法吗？要求在C++或任何其他语言中不使用任何内置函数（如 C++ 中的 __builtin_popcount）来执行此操作。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/counting-bits
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  const ret = new Array(num.length + 1).fill(0);
  for (let i = 1; i < num.length; i += 1) {
    ret[i] = ret[i >> 1] + (i & 1);
  }
};

/**
 * i >> 1 等于 ~~(i / 2) 必然比 i 小
 * 即 ret[i >> 1] 在计算 ret[i] 之前已经计算过了
 * 而 i >> 1 会把最低位的1丢掉
 * 所以要判断下是否要补一个1
 * i & 1：若 i 是奇数，则最低位为1，i & 1 为1，补；若 i 是偶数，则最低位为0，i & 1 为0，不补
 */
