/* 
  给定两个数组，arr1 和 arr2，

  arr2 中的元素各不相同
  arr2 中的每个元素都出现在 arr1 中
  对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。


  示例：

  输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
  输出：[2,2,2,1,4,3,3,9,6,7,19]
   

  提示：

  1 <= arr1.length, arr2.length <= 1000
  0 <= arr1[i], arr2[i] <= 1000
  arr2 中的元素 arr2[i] 各不相同
  arr2 中的每个元素 arr2[i] 都出现在 arr1 中

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/0H97ZC
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const map = {};
  for (const num of arr1) {
    if (!map[num]) map[num] = 0;
    map[num] += 1;
  }
  const ret = [];
  for (const num of arr2) {
    if (map[num]) {
      let i = map[num];
      while (i--) {
        ret.push(num);
      }
      delete map[num];
    }
  }
  Object.keys(map).forEach((num) => {
    let i = map[num];
    while (i--) {
      ret.push(+num);
    }
  });
  return ret;
};

/**
 * 利用Object中属性若是number类型，会自动排序的特性
 */

var relativeSortArray = function(arr1, arr2) {
  const map = new Map();
  for (let i = 0; i < arr2.length; i += 1) {
    map.set(arr2[i], i);
  }
  return arr1.sort((a, b) => {
    if (map.has(a) && map.has(b)) return map.get(a) - map.get(b);
    if (map.has(a)) return -1;
    if (map.has(b)) return 1;
    return a - b;
  });
};