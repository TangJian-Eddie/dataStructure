function insertionSort(arr) {
  let temp, inner;
  for (let outer = 1; outer < arr.length; outer++) {
    temp = arr[outer];
    inner = outer;
    while (inner > 0 && arr[inner - 1] > temp) {
      arr[inner] = arr[inner - 1];
      inner--;
    }
    arr[inner] = temp;
  }
}
insertionSort([6, 10, 0, 6, 5, 8, 7, 4, 2, 7]);
