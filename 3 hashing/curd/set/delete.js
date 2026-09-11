let set = new Set([10, 20, 30]);

set.delete(20);

console.log(set); // {10, 30}
console.log(set.delete(10)); // true
