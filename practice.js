const arr = [1, 2, 2, 3, 1, 1];

const freq = new Map();

for (const num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
}

console.log(freq);

// { 1 => 3, 2 => 2, 3 => 1 }