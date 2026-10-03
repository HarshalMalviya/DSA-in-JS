function majorityElement(nums) {
  const freq = new Map();

  for (let i = 0; i < nums.length; i++) {
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
  }

  for (let [key, value] of freq) {
    if (value > nums.length / 2) {
      return key;
    }
  }
}

console.log(majorityElement([7, 0, 0, 1, 7, 7, 2, 7, 7]))