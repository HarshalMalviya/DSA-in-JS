var getConcatenation = function(nums) {
    let ans = [...nums, ...nums]
    return ans

};

//test case
console.log(getConcatenation([1,2,1]))
console.log(getConcatenation([1,3,2,1]))

/*details
very easy 1
LeetCode 1929 - Concatenation of Array
Pattern: Array Duplication
topic : array
*/