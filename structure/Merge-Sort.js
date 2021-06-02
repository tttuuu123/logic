// 二路归并排序
export function mergeSort(arr, l = 0, r = arr.length - 1) {
  if (left >= r) return;
  const mid = (l + r) >> 1;
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);
  const temp = [];
  let i = l;
  let j = mid + 1;
  while (i <= mid || j <= r) {
    if (
      j > r ||
      (
        i <= mid && arr[i] <= arr[j]
      )
    ) {
      temp.push(arr[i]);
    } else {
      temp.push(arr[j]);
    }
  }
  for (let i = l; i <= r; i += 1) {
    arr[i] = temp[i - l];
  }
  return;
}