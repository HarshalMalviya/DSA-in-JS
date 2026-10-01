function rotateArray(nums, k) {
  for (let i = 0; i <= k - 1; i++) {
    nums.push(nums[0]);
    nums.shift();
  }
  return nums
}

console.log(rotateArray([1, 2, 3, 4, 5, 6], 2));
