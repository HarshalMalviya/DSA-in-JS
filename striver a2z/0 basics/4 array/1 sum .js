function sum(arr, n) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
}

let arr = [1, 2, 3, 4, 5];
console.log(sum(arr, arr.length));
