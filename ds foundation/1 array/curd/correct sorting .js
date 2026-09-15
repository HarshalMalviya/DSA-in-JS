let arr = [10, 2, 5, 1]
arr.sort();
console.log(arr);  // WRONG! ("10" comes before "2" alphabetically!)

arr.sort((a, b) => a - b);
console.log(arr); 

