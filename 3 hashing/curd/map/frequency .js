let arr = [1,2,3,2,4,4,4]

//const freq = new Map();
const freq = {};

for (const num of arr) {
    freq[num] = (freq[num] || 0) + 1;
}

console.log(freq); 