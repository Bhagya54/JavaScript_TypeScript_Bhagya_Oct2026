// JavaScript has 2 numeric types: number and bigint

// ---------- 1. number (64-bit floating point) ----------
// Integers and decimals are both the same "number" type
let integer=42
let negative=-100
let decimal=3.14
console.log(typeof integer, typeof decimal)//number number

// Exponential (scientific) notation
let big=2.5e6//2.5 * 10^6
let small=1e-3//0.001
console.log(big, small)//2500000 0.001

// Different bases (all still type number)
let hex=0xFF//hexadecimal - base 16
let octal=0o77//octal - base 8
let binary=0b1010//binary - base 2
console.log(hex, octal, binary)//255 63 10

// Numeric separator _ for readability
let salary=1_000_000
console.log(salary)//1000000

// ---------- 2. Special number values ----------
console.log(1/0)//Infinity
console.log(-1/0)//-Infinity
console.log("abc"*2)//NaN (Not a Number)
console.log(typeof NaN)//number (yes, NaN is a number type)
console.log(-0===0)//true (negative zero exists but equals 0)

// ---------- 3. Number limits ----------
console.log(Number.MAX_SAFE_INTEGER)//9007199254740991 (2^53 - 1)
console.log(Number.MIN_SAFE_INTEGER)//-9007199254740991
console.log(Number.MAX_VALUE)//1.7976931348623157e+308
console.log(Number.MIN_VALUE)//5e-324 (smallest positive number)
console.log(Number.EPSILON)//2.220446049250313e-16

// Beyond safe integer, number loses precision
console.log(9007199254740991+2)//9007199254740992 (wrong!)

// Floating point precision issue
console.log(0.1+0.2)//0.30000000000000004

// ---------- 4. bigint (any size integer) ----------
// Add n at the end of the integer
let huge=9007199254740991n
console.log(typeof huge)//bigint
console.log(huge+2n)//9007199254740993n (correct)

// bigint and number cannot be mixed directly
// console.log(huge+1)//TypeError: Cannot mix BigInt and other types
console.log(huge+BigInt(1))//9007199254740992n
