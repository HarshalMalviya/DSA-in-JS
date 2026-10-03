let arr = [7, 0, 0, 1, 7, 7, 2, 7, 7];

const freq = new Map();

for (let i = 0; i < arr.length; i++) {
  freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
}

for (let [key, value] of freq) {
  if (value > arr.length / 2) {
    console.log(key);
  }
}
