function linearSearch(nums, target) {
  for (let i = 0; i <= nums.length - 1; i++) {
    if (target == nums[i]) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([2, 3, 4, 5, 3], 3));