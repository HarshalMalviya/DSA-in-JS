function palindromeCheck(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  let s2 = "";

  for (let i = s.length - 1; 0 <= i; i--) {
    s2 += s[i];
  }

  for (let i in s) {
    if (s[i] !== s2[i]) {
      return false;
    }
  }
  return true;
}
console.log(palindromeCheck("evil"));
