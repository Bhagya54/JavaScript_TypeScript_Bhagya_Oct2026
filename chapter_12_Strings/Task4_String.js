// Write a validator for names used in helper functions, variables, or test data keys.

// Rules:
// - Value must be a non-empty string after trimming.
// - It must start with a letter, underscore, or dollar sign.
// - Remaining characters may include letters, digits, underscore, or dollar sign.
// - Reject reserved words used in this chapter: let, const, var, class, function, return.

function isValidJsBasicsIdentifier(name) {
    const reservedKeywords = ["let", "const", "var", "class", "function", "return"];
    name = name.trim();

    if (name === "") {
        return false;
    }

    if (reservedKeywords.includes(name)) {
        return false;
    }

    //.test() is a method of a Regular Expression (RegExp) that checks whether a string matches the pattern.
    return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name)

}

console.log(`isValidJsBasicsIdentifier("loginButton") -> ${isValidJsBasicsIdentifier("loginButton")}`)
console.log(`isValidJsBasicsIdentifier("$submit") -> ${isValidJsBasicsIdentifier("$submit")}`)
console.log(`isValidJsBasicsIdentifier("1login") -> ${isValidJsBasicsIdentifier("1login")}`)
console.log(`isValidJsBasicsIdentifier("let") -> ${isValidJsBasicsIdentifier("let")}`)
/*
Case 1
Input: isValidJsBasicsIdentifier("loginButton")

Expected: true

Case 2
Input: isValidJsBasicsIdentifier("$submit")

Expected: true

Case 3
Input: isValidJsBasicsIdentifier("1login")

Expected: false

Case 4
Input: isValidJsBasicsIdentifier("let")

Expected: false
*/