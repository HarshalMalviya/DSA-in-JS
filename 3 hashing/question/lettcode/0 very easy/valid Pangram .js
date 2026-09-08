var checkIfPangram = function(sentence) {
    let set = new Set();
    for(let i =0;i<sentence.length;i++){
        let ch = sentence.charAt(i);
        set.add(ch)
    }

  return set.size == 26;
};


//test case
console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))
console.log(checkIfPangram("leetcode"))

/*details
very easy 0
leetcode 1832 - Check if the Sentence Is Pangram
Pattern: hash table
topic : hashing 
*/