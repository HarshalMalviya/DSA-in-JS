function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const freqs = new Map();

  for (let i = 0; i < s.length; i++) {
    freqs.set(s[i], (freqs.get(s[i]) || 0) + 1);
  }

  const freqt = new Map();

  for (let i = 0; i < t.length; i++) {
    freqt.set(t[i], (freqt.get(t[i]) || 0) + 1);
  }

  for (let [key, value] of freqs) {
    if (freqt.get(key) !== value) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("anagram", "Nagaram"))
