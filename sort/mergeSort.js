function mergeSort(arr) {
  if (arr.length < 2) {
    return;
  }
  let step = 1;
  let left, right;
  while (step < arr.length) {
    left = 0;
    right = step;
    while (right + step <= arr.length) {
      mergeArrays(arr, left, left + step, right, right + step);
      left = right + step;
      right = left + step;
    }
    if (right < arr.length) {
      mergeArrays(arr, left, left + step, right, arr.length);
    }
    step *= 2;
  }
}
function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
  let rightArr = new Array(stopRight - startRight + 1);
  let leftArr = new Array(stopLeft - startLeft + 1);
  let k = startRight;
  for (let i = 0; i < rightArr.length - 1; i++) {
    rightArr[i] = arr[k];
    k++;
  }
  k = startLeft;
  for (let i = 0; i < leftArr.length - 1; i++) {
    leftArr[i] = arr[k];
    k++;
  }
  rightArr[rightArr.length - 1] = Infinity;
  leftArr[leftArr.length - 1] = Infinity;
  let m = 0;
  let n = 0;
  for (let j = startLeft; j < stopRight; j++) {
    if (leftArr[m] <= rightArr[n]) {
      arr[j] = leftArr[m];
      m++;
    } else {
      arr[j] = rightArr[n];
      n++;
    }
  }
  console.log("leftArr" + leftArr);
  console.log("rightArr" + rightArr);
}
let nums = [6, 10, 1, 9, 4, 8, 2, 7, 3, 5];
mergeSort(nums);
console.log(nums);
