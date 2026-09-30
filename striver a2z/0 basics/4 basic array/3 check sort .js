function isSorted(nums) {
  for (let i = 0; i <= nums.length - 2; i++) {
    if (nums[i] > nums[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1, 2, 3, 5, 7]));
