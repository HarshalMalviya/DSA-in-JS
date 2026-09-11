var sortPeople = function(names, heights) {
    let map = new Map();
    let result = []
    for(let i=0; i<names.length; i++){
        map.set(heights[i] , names[i])
    }
    heights.sort((a,b) => b-a)

    for(let i=0; i <heights.length; i++){
       result.push(map.get(heights[i]))
    }
    return result;
};

//test case
console.log(sortPeople(["Mary","John","Emma"] , [180,165,170] )) 
console.log(sortPeople(["Alice","Bob","Bob"] , [155,185,150] )) 


/*details
very easy -2
LeetCode 2418 - Sort the People
Pattern: hash table
topic : hashing
*/