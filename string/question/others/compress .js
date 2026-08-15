function compressString(s) {
    let result = "";
    let count = 1;

    for (let i = 0; i < s.length; i++) {

        if (i + 1 < s.length && s[i] === s[i + 1]) {
            count++;
        } else {
            result += s[i] + count;
            count = 1;
        }
    }

    if (result.length < s.length) {
        return result;
    }

    return s;
}

console.log(compressString("aabcccccaaa"));
console.log(compressString("abc"));
