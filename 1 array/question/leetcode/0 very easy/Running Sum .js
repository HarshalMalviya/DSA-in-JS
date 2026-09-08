var runningSum = function(nums) {
    let sum = 0
    let arr = []

    for (let i of nums) {
        sum += i
        arr.push(sum)

    }
        return arr
};

//test case
console.log(runningSum([1,2,3,4]))
console.log(runningSum([1,1,1,1,1]))
console.log(runningSum([3,1,2,10,1]))


/*details
very easy 2
LeetCode 1480 - Running Sum of 1d Array
Pattern: Prefix Sum
topic : array
*/