/* 
  在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

  示例 1:

  输入: [7,5,6,4]
  输出: 5

  限制：

  0 <= 数组长度 <= 50000

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  return run(nums);

  function run(arr, l = 0, r = arr.length - 1) {
    if (l >= r) return 0;
    let count = 0;
    const mid = (l + r) >> 1;
    count += run(arr, l, mid);
    count += run(arr, mid + 1, r);
    let i = l;
    let j = mid + 1;
    const temp = [];
    while (i <= mid || j <= r) {
      if (
        j > r ||
        (
          i <= mid && arr[i] <= arr[j]
        )
      ) {
        temp.push(arr[i++]);
      } else {
        temp.push(arr[j++]);
        // 每次
        count += (mid - i + 1);
      }
    }
    for (let i = l; i <= r; i += 1) {
      arr[i] = temp[i - l];
    }
    return count;
  }
};

/* 
  假设我们有两个已排序的序列等待合并，分别是 L = \{ 8, 12, 16, 22, 100 \}L={8,12,16,22,100} 和 R = \{ 9, 26, 55, 64, 91 \}R={9,26,55,64,91}。一开始我们用指针 lPtr = 0 指向 LL 的首部，rPtr = 0 指向 RR 的头部。记已经合并好的部分为 MM。

  L = [8, 12, 16, 22, 100]   R = [9, 26, 55, 64, 91]  M = []
      |                          |
    lPtr                       rPtr
  我们发现 lPtr 指向的元素小于 rPtr 指向的元素，于是把 lPtr 指向的元素放入答案，并把 lPtr 后移一位。


  L = [8, 12, 16, 22, 100]   R = [9, 26, 55, 64, 91]  M = [8]
          |                       |
        lPtr                     rPtr
  这个时候我们把左边的 88 加入了答案，我们发现右边没有数比 88 小，所以 88 对逆序对总数的「贡献」为 00。

  接着我们继续合并，把 99 加入了答案，此时 lPtr 指向 12，rPtr 指向 26。


  L = [8, 12, 16, 22, 100]   R = [9, 26, 55, 64, 91]  M = [8, 9]
          |                          |
        lPtr                       rPtr
  此时 lPtr 比 rPtr 小，把 lPtr 对应的数加入答案，并考虑它对逆序对总数的贡献为 rPtr 相对 RR 首位置的偏移 11（即右边只有一个数比 12 小，所以只有它和 12 构成逆序对），以此类推。

  作者：LeetCode-Solution
  链接：https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/solution/shu-zu-zhong-de-ni-xu-dui-by-leetcode-solution/
  来源：力扣（LeetCode）
  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/