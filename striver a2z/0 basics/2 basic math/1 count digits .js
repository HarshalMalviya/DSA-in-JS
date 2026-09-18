let n = 12329545;
let count = 0;

while(n>0){
  let result = Math.floor(n/10)
  n = result
  count++
}
console.log(count)