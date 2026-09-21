function arraySortedOrNot(arr, n) {
  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
      return true;
}

let arr = [1, 2, 3, 7, 5];
console.log((arraySortedOrNot(arr , arr.length)))