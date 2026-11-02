function isPalindrome(s1) {
    let rev = ""
    for (let i = s1.length - 1; i >= 0; i--) {
        rev = rev + s1.charAt(i);
    }

    return s1 === rev;
}

console.log("Is Palindrome??:", isPalindrome("madam"))
console.log("Is Palindrome??:", isPalindrome("hello"))