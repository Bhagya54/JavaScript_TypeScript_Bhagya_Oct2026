function isAnagram(a, b) {
    return a.split("").sort().join("") === b.split("").sort().join("");
}

console.log("Is Anagram:", isAnagram("saw", "was"))
console.log("Is Anagram:", isAnagram("stop", "spot"))
console.log("Is Anagram:", isAnagram("hello", "ollf"))
