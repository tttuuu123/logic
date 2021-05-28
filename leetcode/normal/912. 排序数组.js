/* 
  给你一个整数数组 nums，请你将该数组升序排列。

  示例 1：

  输入：nums = [5,2,3,1]
  输出：[1,2,3,5]
  示例 2：

  输入：nums = [5,1,1,2,0,0]
  输出：[0,0,1,1,2,5]
   

  提示：

  1 <= nums.length <= 50000
  -50000 <= nums[i] <= 50000


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/sort-an-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  QuickSort(nums);
  return nums;
};

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function QuickSort(arr, l = 0, r = arr.length - 1) {
  if (l >= r) return;
  const base = arr[l];
  let x = l;
  let y = r;
  while (x <= y) {
    while (arr[x] < base) x += 1;
    while (arr[y] > base) y -= 1;
    if (x <= y) {
      swap(arr, x, y);
      x += 1;
      y -= 1;
    }
  }
  QuickSort(arr, l, x - 1);
  QuickSort(arr, x, r);
}

/**
 * 因为基准值取的第一个元素
 * 所以若原数组趋于有序，则快排时间复杂度退化为O(n^2)
 */