function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function getMid(a, b, c) {
  if (a >= b && a <= c) return a;
  if (b >= a && b <= c) return b;
  return c;
}

const threshold = 16;  // 设置分区大小，小数据规模时，停止快排过程

function QuickSort(arr, left = 0, right = arr.length - 1) {
  while (right - left > threshold) {
    let l = left;
    let r = right;
    const base = getMid(arr[l], arr[(l + r) >> 1], arr[r]);
    while (l <= r) {
      while (arr[l] < base) l += 1;
      while (arr[r] > base) r -= 1;
      if (l <= r) {
        swap(arr, l, r);
        l += 1;
        r -= 1;
      };
    }
    QuickSort(arr, l, right);  // 右侧递归
    right = r;  // 左循环 减少一半递归调用
  }
}

function InsertSort(arr, left = 0, right = arr.length - 1) {
  // 找出最小值
  let minIdx = left;
  for (let i = left + 1; i <= right; i += 1) {
    if (arr[i] < arr[minIdx]) minIdx = i;
  }
  // 将其插入至数组第一个元素，这样后续就不需要关心边界边界条件
  while (minIdx > left) {
    swap(arr, minIdx, minIdx - 1);
    minIdx -= 1;
  }
  for (let i = left + 2; i <= right; i += 1) {
    let j = i;
    // 因为最左侧一定是arr中的最小值，所以必然有 arr[1] < arr[0] 不成立
    while (arr[j] < arr[j - 1]) {
      swap(arr, j, j - 1);
      j -= 1;
    }
  }
}

// 避免了当arr最初就趋于有序的场景下，快速排序的缺点
export function Sort(arr, left = 0, right = arr.length - 1) {
  QuickSort(arr, left, right);
  InsertSort(arr, left, right);
}