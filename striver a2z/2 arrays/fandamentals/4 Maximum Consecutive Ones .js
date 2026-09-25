function findMaxConsecutiveOnes(nums) {
  let count = 0;
  let res = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] == 1) {
      count += 1;
    }
    if (nums[i] == 0 || i == nums.length - 1) {
      if (res < count) {
        res = count;
      }
      count = 0;
    }
  }
  return res;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 0, 1, 1, 1, 0]));
