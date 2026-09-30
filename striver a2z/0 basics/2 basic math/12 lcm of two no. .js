function LCM(n1, n2) {
  let num = Math.max(n1, n2);

  while (true) {
    if (num % n1 === 0 && num % n2 === 0) {
      return num;
    }

    num++;
  }
}

console.log(LCM(4, 6));
