/* 
  给定一个整数数组 nums，按要求返回一个新数组 counts。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。
 
  示例：

  输入：nums = [5,2,6,1]
  输出：[2,1,1,0] 
  解释：
  5 的右侧有 2 个更小的元素 (2 和 1)
  2 的右侧仅有 1 个更小的元素 (1)
  6 的右侧有 1 个更小的元素 (1)
  1 的右侧有 0 个更小的元素
   

  提示：

  0 <= nums.length <= 10^5
  -10^4 <= nums[i] <= 10^4


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  const idx2num = [];
  for (let i = 0; i < nums.length; i += 1) {
    idx2num.push({
      idx: i,
      val: nums[i],
      cnt: 0
    });
  }
  run(idx2num);
  const ret = new Array(nums.length - 1);
  for (let x of idx2num) ret[x.idx] = x.cnt;
  return ret;

  function run(arr, l = 0, r = arr.length - 1) {
    if (l >= r) return;
    const mid = (l + r) >> 1;
    run(arr, l, mid);
    run(arr, mid + 1, r);
    let i = l;
    let j = mid + 1;
    const temp = [];
    while (i <= mid || j <= r) {
      if (
        j > r ||
        (i <= mid && arr[i].val > arr[j].val)
      ) {
        arr[i].cnt += r - j + 1;
        temp.push(arr[i++]);
      } else {
        temp.push(arr[j++]);
      }
    }
    for (let i = l; i <= r; i += 1) arr[i] = temp[i - l];
  }
};

