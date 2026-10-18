// Naming conventions = style guidelines, not language rules.
// JavaScript accepts any valid identifier; conventions make code readable.

// 1. camelCase -> variables and functions
//    first word lowercase, each next word starts uppercase
let firstName = "Bhagya";
let totalPrice = 250;
function calculateTotal(price, qty) {
    return price * qty;
}
console.log(firstName, totalPrice, calculateTotal(50, 2));

// 2. PascalCase -> classes
//    every word starts uppercase
class UserAccount {
    constructor(name) {
        this.name = name;
    }
}
console.log(new UserAccount("Bhagya").name);

// 3. UPPER_SNAKE_CASE -> constants with fixed values
const MAX_LOGIN_ATTEMPTS = 3;
const BASE_URL = "https://example.com";
console.log(MAX_LOGIN_ATTEMPTS, BASE_URL);

// 4. snake_case -> valid but uncommon in JS (common in Python)
let user_age = 25;
console.log(user_age);

// 5. _underscorePrefix -> "private" by convention (not enforced)
let _tempValue = 10;
console.log(_tempValue);

// 6. $prefix -> often used for DOM elements or jQuery objects
let $loginButton = "button element";
console.log($loginButton);

// 7. kebab-case -> NOT valid for identifiers ('-' means minus)
// let user-name = "x"; // SyntaxError
// used for file names (login-page.js) and CSS classes instead
