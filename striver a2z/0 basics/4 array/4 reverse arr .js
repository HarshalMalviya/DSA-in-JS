// Function to reverse the array in place
// The reversal should be done IN-PLACE.
// Do not return anything from this function.
function reverse(arr, n) {
  let left = 0;
  let right = n - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(reverse(arr, arr.length));
