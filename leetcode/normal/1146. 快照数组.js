/* 
  实现支持下列接口的「快照数组」- SnapshotArray：

  SnapshotArray(int length) - 初始化一个与指定长度相等的 类数组 的数据结构。初始时，每个元素都等于 0。
  void set(index, val) - 会将指定索引 index 处的元素设置为 val。
  int snap() - 获取该数组的快照，并返回快照的编号 snap_id（快照号是调用 snap() 的总次数减去 1）。
  int get(index, snap_id) - 根据指定的 snap_id 选择快照，并返回该快照指定索引 index 的值。
   
  示例：

  输入：["SnapshotArray","set","snap","set","get"]
      [[3],[0,5],[],[0,6],[0,0]]
  输出：[null,null,0,null,5]
  解释：
  SnapshotArray snapshotArr = new SnapshotArray(3); // 初始化一个长度为 3 的快照数组
  snapshotArr.set(0,5);  // 令 array[0] = 5
  snapshotArr.snap();  // 获取快照，返回 snap_id = 0
  snapshotArr.set(0,6);
  snapshotArr.get(0,0);  // 获取 snap_id = 0 的快照中 array[0] 的值，返回 5

  提示：

  1 <= length <= 50000
  题目最多进行50000 次set，snap，和 get的调用 。
  0 <= index < length
  0 <= snap_id < 我们调用 snap() 的总次数
  0 <= val <= 10^9

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/snapshot-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
  this.len = length;
  this.map = new Map();
  this.snapCnt = 0;
  this.arr = Array(this.len).fill(0);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
  this.arr[index] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
  this.map.set(this.snapCnt, [...this.arr]);
  this.snapCnt += 1;
  return this.snapCnt - 1;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
  const arr = this.map.get(snap_id);
  return arr[index];
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */