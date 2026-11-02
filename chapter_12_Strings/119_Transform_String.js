let str = " Hello World! "
console.log("str:", str)
console.log("After trim():", str.trim())
console.log("After trimStart():", str.trimStart())
console.log("After trimEnd():", str.trimEnd())

console.log("toUpperCase:", str.toUpperCase())
console.log("toLowerCase:", str.toLowerCase())

let msg = "Test:FAIL.Retry:FAIL"
console.log(msg.replace("FAIL", "PASS"))//only first occurance
console.log(msg.replaceAll("FAIL", "PASS"))//all occurances
console.log(msg.replace(/FAIL/g, "PASS"))///g is the global flag-all occurances
let url="https://app.vwo.com?env=qa"
console.log(url.replace(/qa/g,"prod"))

//concat
console.log("Hello".concat(" World"))
console.log("Hello" + " " +"World")
console.log(`${"Hello"} ${"Jaasri"}`)


// split() - Split a string into substrings using the specified separator and return them as an array.
let res="pass,fail,skip"
let resArr=res.split(",")
console.log(resArr)

//join()- Adds all the elements of an array into a string, separated by the specified separator string
let s="test:login:pass".split(":").join("_")
console.log(s)

let parts=["2026","06","03"]
console.log(parts.join("-"))
