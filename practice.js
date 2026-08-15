function countVowelsConsonants(s) {
    let vowels = 0;
    let consonants = 0;

    for (let char of s.toLowerCase()) {
        if ("aeiou".includes(char)) {
            vowels++;
        } else if (char >= "a" && char <= "z") {
            consonants++;
        }
    }

    return { vowels, consonants };
}

console.log(countVowelsConsonants("Hello World 123"));
// { vowels: 3, consonants: 7 }