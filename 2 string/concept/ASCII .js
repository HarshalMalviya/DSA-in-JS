function isAlphanumeric(char) {
const code = char.charCodeAt(0);
return (
(code >= 48 && code <= 57) ||  // '0'-'9'
(code >= 65 && code <= 90) ||  // 'A'-'Z'
(code >= 97 && code <= 122)    // 'a'-'z'
);
}

console.log(isAlphanumeric("A"));
console.log(isAlphanumeric("7"));
console.log(isAlphanumeric("@"));


//shorthand

let s = "a4@"

let cleaned = s.split("").filter(c => /[a-zA-Z0-9]/.test(c));

console.log(cleaned); // []