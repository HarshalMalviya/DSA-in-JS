function secondLargestElement(nums) {
  nums.sort((a, b) => a - b);

  let res = nums.length - 1;
  for (let i = nums.length - 2; 0 <= i; i--) {
    if (nums[i] < nums[res]) {
      return nums[i];
    }
  }
  return -1;
}

console.log(secondLargestElement([8, 8, 7, 6, 5]));
