function factorial(n) {
  let result = 1;
  for (let i = n; 1 < i; i--) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));
