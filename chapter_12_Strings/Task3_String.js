// Rules:
// - Trim leading and trailing spaces.
// - Convert text to lowercase.
// - Replace non-alphanumeric groups with a single hyphen.
// - Prefix the result with "js-basic-".

//+ means - Match one or more consecutive non-alphanumeric characters as a single match.
//This regex removes hyphens at the beginning or end of the string.
function normalizeJsBasicsLabel(label) {
    const normalized = label
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    return normalized ? `js-basic-${normalized}` : "js-basic";
}

console.log(normalizeJsBasicsLabel(" Login Button "))
console.log(normalizeJsBasicsLabel("User Profile: Edit!"))
console.log(normalizeJsBasicsLabel("---Search@@Box---"))
console.log(normalizeJsBasicsLabel(""))

// Case 1
// Input: normalizeJsBasicsLabel(" Login Button ")

// Expected: "js-basic-login-button"

// Case 2
// Input: normalizeJsBasicsLabel("User Profile: Edit!")

// Expected: "js-basic-user-profile-edit"

// Case 3
// Input: normalizeJsBasicsLabel("---Search@@Box---")

// Expected: "js-basic-search-box"

// Case 4
// Input: normalizeJsBasicsLabel("")

// Expected: "js-basic"