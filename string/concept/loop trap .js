// high worst case time complexity
let s = "hello";

let result = "";

for (let ch of s) {
    result += ch;
}
console.log(result)

//better worst case time complexity
let arr = [];

for (let ch of s) {
    arr.push(ch);
}

let result2 = arr.join("")
console.log(result2);