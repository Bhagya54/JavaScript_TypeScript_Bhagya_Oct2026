//isArray() - Checking if something is an array??
let result = ["pass", "fail", "skip"]
console.log(Array.isArray(result))

let result1 = "a"
console.log(Array.isArray(result1))

console.log("***Every - all values should satisfy the condition****")
let arr = [80, 90, 100]
console.log("Values of arr are > 70??", arr.every(val => val > 70))
arr = [23, 79, 12]
console.log("Values of arr are > 70??", arr.every(val => val > 70))

console.log("***Some - atleast 1 value should satisfy the condition****")
let s2 = [80, 60, 85]
console.log(`Values of array: [${s2}] are < 70? ${s2.some(a => a < 70)}`)//atleast 1 should satisfy
let s3 = [80, 90, 85]
console.log(`Values of array: [${s3}] are < 70? ${s3.some(a => a < 70)}`)


//Playwright API
let result2 = [200, 201, 204].every((statusCode) => statusCode >= 200 && statusCode < 300)
console.log("Result of an api is success every time?", result2)