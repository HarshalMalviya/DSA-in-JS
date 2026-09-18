let n = 153;
let o = n;
let sum = 0;
const k = n.toString().length;


while(n>0){
  let rem = n%10
  sum += Math.pow(rem, k);  
  n = Math.floor(n/10)
}
if(o === sum){
  console.log("A")
}
else{
  console.log("NA")
}