function rotateArrayByOne(nums) {
  nums.push(nums[0]);
  nums.shift();
  return nums;
}

console.log(rotateArrayByOne([1, 2, 3, 4, 5]));
