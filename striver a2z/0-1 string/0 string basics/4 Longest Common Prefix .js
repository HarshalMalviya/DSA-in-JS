function longestCommonPrefix(strs) {
  let res = "";
  for (let i = 0; i <= strs[0].length - 1; i++) {
    for (let j = 1; j <= strs.length - 1; j++) {
      if (strs[0][i] !== strs[j][i]) {
        if (res == "") {
          return "";
        }
        return res;
      }
    }
    res += strs[0][i];
  }
  return res;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
