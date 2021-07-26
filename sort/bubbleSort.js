function bubbleSort(arr) {
  for (let i = 0; i < len - 1; i++) {
    let len = arr.length;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
