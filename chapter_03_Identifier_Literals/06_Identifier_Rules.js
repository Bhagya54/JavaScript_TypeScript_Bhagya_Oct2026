
// Rule 1: Allowed characters - letters, digits, underscore (_), dollar ($)
var firstName = "Bhagya";
var user_age = 25;
var $amount = 500;
var item2 = "Pen";
console.log(firstName, user_age, $amount, item2);

// Rule 2: First character must be a letter, _ or $ (not a digit)
var _count = 1;
var $price = 99;
var name1 = "valid";
// var 1name = "invalid";   // SyntaxError: Invalid or unexpected token
console.log(_count, $price, name1);

// Rule 3: No spaces allowed
var myName = "camelCase works";
var my_name = "snake_case works";
// var my name = "invalid"; // SyntaxError: Unexpected identifier
console.log(myName, my_name);

// Rule 4: No special characters other than _ and $
var totalCost = 100;
// var total-cost = 100;    // SyntaxError: '-' is minus operator
// var total@cost = 100;    // SyntaxError: Invalid or unexpected token
// var total#cost = 100;    // SyntaxError: Invalid or unexpected token
// var total.cost = 100;    // SyntaxError: Unexpected token '.'
console.log(totalCost);

// Rule 5: Identifiers are case-sensitive
var age = 10;
var Age = 20;
var AGE = 30;
console.log(age, Age, AGE); // 10 20 30 -> three different variables

// Rule 6: Reserved keywords cannot be used
var letValue = 5;           // keyword inside a longer name is fine
// var let = 5;             // SyntaxError (in strict mode / let declarations)
// var if = 5;              // SyntaxError: Unexpected token 'if'
// var function = 5;        // SyntaxError: Unexpected token 'function'
// var return = 5;          // SyntaxError: Unexpected token 'return'
console.log(letValue);

// Rule 7: Literals true, false, null cannot be used
var isTrue = true;
// var true = 1;            // SyntaxError: Unexpected token 'true'
// var null = 0;            // SyntaxError: Unexpected token 'null'
console.log(isTrue);

// Rule 8: Strict mode reserves extra words
// (implements, interface, package, private, protected, public, static)
var publicName = "ok";
var static = "allowed only in non-strict mode";
// In strict mode ("use strict" at top of file), 

var static = 1; //-> SyntaxError
console.log(publicName, static);

// Rule 9: Unicode letters are allowed
var café = "coffee";
var 名前 = "name in Japanese";
var π = 3.14;
console.log(café, 名前, π);

// Rule 10: No length limit (but keep names meaningful)
var thisIsAVeryLongVariableNameThatIsStillPerfectlyValid = true;
console.log(thisIsAVeryLongVariableNameThatIsStillPerfectlyValid);

// Conventions (style, not rules)
var userName = "camelCase for variables/functions";
class UserAccount { }        // PascalCase for classes
const MAX_SIZE = 100;       // UPPER_SNAKE_CASE for constants
console.log(userName, UserAccount.name, MAX_SIZE);
