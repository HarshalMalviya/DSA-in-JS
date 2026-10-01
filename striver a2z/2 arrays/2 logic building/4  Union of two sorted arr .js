function unionArray(nums1, nums2) {
    let temp = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {

        if (nums1[i] === nums2[j]) {
            // ⭐ UNION ONLY: avoid duplicate
            if (temp.length === 0 || temp[temp.length - 1] !== nums1[i]) {
                temp.push(nums1[i]);
            }

            i++;
            j++;
        }

        else if (nums1[i] < nums2[j]) {
            // ⭐ UNION ONLY: avoid duplicate
            if (temp.length === 0 || temp[temp.length - 1] !== nums1[i]) {
                temp.push(nums1[i]);
            }

            i++;
        }

        else {
            // ⭐ UNION ONLY: avoid duplicate
            if (temp.length === 0 || temp[temp.length - 1] !== nums2[j]) {
                temp.push(nums2[j]);
            }

            j++;
        }
    }

    // ⭐ UNION ONLY: remaining elements also need duplicate checking
    while (i < nums1.length) {
        if (temp.length === 0 || temp[temp.length - 1] !== nums1[i]) {
            temp.push(nums1[i]);
        }
        i++;
    }

    // ⭐ UNION ONLY
    while (j < nums2.length) {
        if (temp.length === 0 || temp[temp.length - 1] !== nums2[j]) {
            temp.push(nums2[j]);
        }
        j++;
    }

    return temp;
}

  console.log(unionArray( [1, 3, 4, 5] , [1, 2, 7]))