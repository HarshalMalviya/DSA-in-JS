function arraySum(nums) {
  if (nums.length - 1 == 0) return nums[0];

  return nums[nums.length - 1] + arraySum(nums.slice(0, nums.length - 1));
}

console.log(arraySum([1, 2, 3, 4, 5]));
