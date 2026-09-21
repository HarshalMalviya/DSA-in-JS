function countOdd(arr, n) {
  let result = 0;
  for (let i of arr) {
    if (i % 2 !== 0) {
      result += 1;
    }
  }
  return result;
}

let arr = [1, 2, 3, 4, 5];
console.log(countOdd(arr , arr.length))
