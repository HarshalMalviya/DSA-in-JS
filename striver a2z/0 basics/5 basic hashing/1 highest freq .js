let arr = [1, 1, 1, 2, 2, 10];
const freq = new Map();

for (let i = 0; i < arr.length; i++) {
    freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
}
console.log(freq)

let min = Infinity
let max = -Infinity
let minK;
let maxK;

freq.forEach((value, key) => {
    if(value > max){
        max = value 
        maxK = key
    }
        if(value < min){
        min = value 
        minK = key
    }
});

console.log(maxK , minK);
