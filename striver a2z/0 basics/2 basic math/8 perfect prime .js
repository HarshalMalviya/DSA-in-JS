function isPerfect(n) {
  let result = 0;

  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      result += i;
    }
  }
  if (n == result) {
    return true;
  } else {
    return false;
  }
}

console.log(isPerfect(6));
