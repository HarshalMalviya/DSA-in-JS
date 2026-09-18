let arr = [1,2,3,2,4,4,4]

const freq = new Map();

for (let i = 0; i < arr.length; i++) {
    freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
}
console.log(freq)
  let queries = [2, 4, 5];

freq.forEach((value, key) => {
    console.log(key, value);
});

// let freq = new Map();

// for (let num of arr) {
//     if (freq[num]) {
//         freq[num]++;
//     } else {
//         freq[num] = 1;
//     }
// }

// console.log(freq);