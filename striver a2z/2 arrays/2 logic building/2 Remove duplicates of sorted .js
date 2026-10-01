function  removeDuplicates(nums) {
    let j = 0;
    for (let i = 0; i <= nums.length - 1; i++) {
      if (nums[i] !== nums[i + 1]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        j++;
      }
    }
    nums.length = j
    return nums
  }

  console.log(removeDuplicates([1,1,2]))
