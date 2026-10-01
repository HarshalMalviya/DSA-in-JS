function largestElement(nums) {
  let res = nums[0];
  for (let i = 1; i <= nums.length - 1; i++) {
    if (res < nums[i]) {
      res = nums[i];
    }
  }
  return res;
}

console.log(largestElement([3, 3, 6, 1]));
