function selectionSort(arr) {
  let min;
  for (let outer = 0; outer <= arr.length - 2; outer++) {
    min = outer;
    for (let inner = outer + 1; inner <= arr.length - 1; inner++) {
      if (arr[inner] < arr[min]) {
        min = inner;
      }
    }
    let temp = arr[outer];
    arr[outer] = arr[min];
    arr[min] = temp;
  }
}
let nums = [6, 10, 1, 9, 4, 8, 2, 7, 3, 5];
selectionSort(nums);
console.log(nums);
