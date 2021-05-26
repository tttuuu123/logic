function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// 三点取中找基准值
function getMid(a, b, c) {
  if (a >= b && a <= c) return a;
  if (b >= a && b <= c) return b;
  return c;
}

const threshold = 0;  // 设置分区大小

export function QuickSort(arr, left = 0, right = arr.length - 1) {
  // 单边递归
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

