/* 
  整数数组 nums 按升序排列，数组中的值 互不相同 。

  在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

  给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

  你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

  示例 1：

  输入：nums = [4,5,6,7,0,1,2], target = 0
  输出：4
  示例 2：

  输入：nums = [4,5,6,7,0,1,2], target = 3
  输出：-1
  示例 3：

  输入：nums = [1], target = 0
  输出：-1
   

  提示：

  1 <= nums.length <= 5000
  -104 <= nums[i] <= 104
  nums 中的每个值都 独一无二
  题目数据保证 nums 在预先未知的某个下标上进行了旋转
  -104 <= target <= 104

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/search-in-rotated-sorted-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (target === nums[0]) return 0;
  let l = 0;
  let r = nums.length - 1;
  while (nums[l] === nums[l + 1]) l += 1;
  while (nums[r] === nums[r - 1]) r -= 1;
  const lVal = nums[l];
  const rVal = nums[r];
  if (target === lVal) return l;
  if (target === rVal) return r;
  while (l <= r) {
    const mid = (l + r) >>> 1;
    const val = nums[mid];
    if (val === target) return mid;
    if (val <= rVal) {
      if (target > val && target < rVal) {
        l = mid + 1;
      } else {
        r = mid - 1
      }
    } else {
      if (target > lVal && target < val) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }
  return -1;
};

/**
 * 折叠后在2段上都是单调递增的
 * 先对数组左右两侧进行比对，去除掉相同数字，这样可以保证 lVal 必定大于 rVal
 * 接下来二分的比对条件是关键
 * 如果 mid <= rVal，那么说明 mid 一定在 右侧
 * 在右侧前提下，只有 target > nums[mid] 且 target <= rVal，target才会在mid的 右侧
 * 其他同理
 */