let a = [1, 2, 3]
let b = [4, 5, 6]
console.log("******Using Concat*****")
let c = a.concat(b)
console.log(c)

console.log("------------------------")

//spread - modern way of concatenation
console.log("******Using Spread*****")
let d = [...a, ...b];
console.log(d)

console.log("-------------------------")

//Using a common string - join() method
console.log("******Using Join*******")
let result = ["pass", "fail", "skip", "pass"].join(" | ")
console.log(result)