let arr = [13,46,24,52,20,9]

for(let i=0; i<=arr.length-2; i++){

  let min = i;

  for(let j=i+1; j<=arr.length; j++){

    if(arr[j]<arr[min]){
      min = j
    }
  }
  [arr[i], arr[min]] = [arr[min], arr[i]];
}
console.log(arr)