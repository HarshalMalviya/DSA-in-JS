// 0) if(low >= high) return
// 1) mid = Math.floor((low+high)/2)
// 2) divide(arr,low,mid)
// 3) divide(arr,lmid+1,high)

// 4) compare i & j pointers
// 5) push smaller tp temp arr & ++ that pointer 
// 6) if 1 pointer empty then place all other pointer 

// 7) copy temp to arr by loop with low+k


let arr = [3,2,8,5,1,4,23] ;

function devide(arr,low,high){

  if(low == high) return ;

let mid = Math.floor((low+high)/2)

devide(arr,low,mid)
devide(arr,mid+1,high)

combine(arr, low, mid, high);

function combine(arr, low, mid, high) {

    let temp = [];
    let i = low;
    let j = mid + 1;

    while (i <= mid && j <= high) {

    if (arr[i] <= arr[j]) {
        temp.push(arr[i]);
        i++;
    } else {
        temp.push(arr[j]);
        j++;
    }
}
    while (i <= mid) {
        temp.push(arr[i]);
        i++;
    }

    while (j <= high) {
        temp.push(arr[j]);
        j++;
    }
        for (let k = 0; k < temp.length; k++) {
        arr[low + k] = temp[k];
    }
}

}

devide(arr,0,arr.length-1)
console.log(arr)

divide(arr,low,hogh)

