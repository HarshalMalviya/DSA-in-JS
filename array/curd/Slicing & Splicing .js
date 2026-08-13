const arr = ['a', 'b', 'c', 'd', 'e'];

const sub = arr.slice(1, 4);
console.log(sub)

arr.splice(2, 1, 'X');  //(start, deleteCount, ...items)
console.log(arr)