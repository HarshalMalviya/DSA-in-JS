let n = 12321;
let o = n;
let rev = 0;

while(n>0){
  let rem = n%10
  rev = rev*10 + rem
  n = Math.floor(n/10)
}
if(o === rev){
  console.log("p")
}
else{
  console.log("NP")
}