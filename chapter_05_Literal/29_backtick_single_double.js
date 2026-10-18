// 3 ways to write a string: 'single', "double", `backtick`
// All 3 create the same type -> string

let single='Hello'
let double="Hello"
let backtick=`Hello`
console.log(typeof single, typeof double, typeof backtick)//string string string
console.log(single===double && double===backtick)//true (same value)

// ---------- 1. Single vs Double: no real difference ----------
// Only matters when the text itself has quotes
let s1="It's a book"//double outside, single inside -> no escape needed
let s2='He said "Hi"'//single outside, double inside -> no escape needed
let s3='It\'s a book'//same quote inside -> escape with \
console.log(s1)//It's a book
console.log(s2)//He said "Hi"
console.log(s3)//It's a book

// ---------- 2. Backtick (template literal) special powers ----------

// a) String interpolation with ${}
let name="jaasritha"
let age=12
console.log("My name is "+name+" and I am "+age)//old way: + concatenation
console.log(`My name is ${name} and I am ${age}`)//backtick way: cleaner

// b) Expressions inside ${}
console.log(`Next year I will be ${age+1}`)//Next year I will be 13

// c) Multi-line strings
let multiLine=`Line 1
Line 2
Line 3`
console.log(multiLine)
let oldMultiLine="Line 1\nLine 2\nLine 3"//single/double need \n
console.log(oldMultiLine)

// d) Both quotes inside without escaping
console.log(`It's "easy" with backtick`)//It's "easy" with backtick

// ${} does NOT work in single/double quotes
console.log('Hi ${name}')//Hi ${name} (printed as plain text)
