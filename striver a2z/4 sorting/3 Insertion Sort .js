let arr = [7, 4, 1, 5, 3];

for(let i=1; i<=arr.length-1; i++){

for(let j=i; j>0; j--){

if( arr[j-1] > arr[j] ){
  [arr[j-1] , arr[j]] = [arr[j] , arr[j-1]] ;
}

}

}
console.log(arr)

// let arr = [13, 46, 24, 52, 20, 9];

// for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > key) {
//         arr[j + 1] = arr[j];
//         j--;
//     }

//     arr[j + 1] = key;
// }

// console.log(arr);
