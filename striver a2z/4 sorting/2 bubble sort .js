let arr = [13,46,24,52,20,9]

for(let i=0; i<=arr.length-2; i++){
    let swap = 0;

      for (let j = 0; j <= arr.length - 2 - i; j++) {

if(arr[j] > arr[j+1]){
  [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
  swap = 1;
}
}
if(swap == 0){
  break;
}
}
console.log(arr)