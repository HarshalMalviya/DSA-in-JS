function reverseString(s) {
  if (s.length - 1 == 0) return s[0];

  return [s[s.length - 1] , ...reverseString(s.slice(0, s.length - 1))];
}

console.log(reverseString(["h", "e", "l", "l", "o"]))