var twoSum = function(nums, target) {

    for (let i=0; i < nums.length; i++){

        if(nums[i]+nums[i+1] == target ){
            return [i, i+1]
        }

    }
    
};

//test case
console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))


/*details
easy 1
LeetCode 1 - Two Sum
Pattern: Map Lookup
topic : array , hash table
*/