// a=b => changes both

const a = [1, 2, 3];

const b = a;      
console.log(b)

b.push(4);          
console.log(b)
console.log(a)

// a = [...p] => changes one

const p = [1, 2, 3];

const q = [...p];// CORRECT shallow copy
q.push(4)
console.log(p)
console.log(q)