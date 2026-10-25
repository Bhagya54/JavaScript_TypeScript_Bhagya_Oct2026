let tests = ["login", "checkout", "search"]
console.log("------simple for loop with index-----------")
for (let i = 0; i < tests.length; i++) {
    console.log(tests[i])
}

console.log("--------Using for of -------")
for (let test of tests) {
    console.log(test)
}

console.log("--------Using for each -------")
tests.forEach((item, index) => {
    console.log("Index:", index, "Value:", item)
})

console.log("--------Using for in -------")
for (let index in tests) {
    console.log(tests[index])
}

let students = ["methis", "senthils", "ajay", "rahul"]
console.log("--------Using for in -------")
for (let index in students) {
    console.log("Index:", index, "Value:", students[index])
}

console.log("--------Using for entries -------")
for(let [index,student] of students.entries()){
    console.log("Index:",index,"Student:",student)
}