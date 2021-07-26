function shellSort(arr, gaps) {
  for (let g = 0; g < gaps.length; g++) {
    for (let i = gaps[g]; i < arr.length; i++) {
      var temp = arr[i];
      let j;
      for (j = i; j >= gaps[g] && arr[j - gaps[g]] > temp; j -= gaps[g]) {
        arr[j] = arr[j - gaps[g]];
      }
      arr[j] = temp;
    }
  }
  console.log(arr);
}
shellSort([6, 0, 2, 9, 3, 5, 8, 0, 5, 4], [5, 3, 1]);
// 尔排序是基于插入排序的以下两点性质而提出改进方法的：
// 插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到线性排序的效率。
// 但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位。