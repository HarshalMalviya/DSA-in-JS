function times(n){

if (n==0) return;

times(n-1)
console.log(n)

}
times(5)