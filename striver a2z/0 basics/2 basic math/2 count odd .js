function countOddDigit(n) {
  let count = 0;
  while (n > 0) {
    let digit = n % 10;

    if (n % 2 !== 0) {
      count++;
    }
    n = Math.floor(n / 10);
  }
  return count;
}

console.log(countOddDigit(12345));
