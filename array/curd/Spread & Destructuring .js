const a = [1, 2, 9];
const b = [3, 4];

// Copying / Concatenating using Spread Operator
const copy = [...a];
console.log(copy)

const merged = [...a, ...b]; 
console.log(merged)

// Destructuring
const [first, ,third] = a; // , , means skip element
console.log(third)
