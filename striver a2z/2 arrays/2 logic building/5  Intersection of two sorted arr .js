function intersectionArray(nums1, nums2) {
  let temp = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      temp.push(nums1[i]);
      i++;
      j++;
    } else {
      if (nums1[i] < nums2[j]) {
        i++;
      } else {
        j++;
      }
    }
  }
  return temp;
}

console.log(intersectionArray([1, 7, 4, 5], [1, 2, 7]));
