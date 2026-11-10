let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 100],
]

//How many testcases has been executed?
console.log("No. of testcases executed are:", testMatrix.length)

//How many testcases were passed
let passedCount = 0;
for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        if (testMatrix[i][j] === "pass") {
            passedCount += 1
        }
    }
}
console.log("No. of passed testcases:", passedCount)

//what is the status code for the failed testcase
for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        if (testMatrix[i][j] === "fail") {
            console.log("Status code of failed testcase is:", testMatrix[i][j + 1])
        }
    }
}


for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        console.log(testMatrix[i][j])
    }
    console.log()
}

console.log("Using for..of and process.stdout.write")
for (let row of testMatrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ")
    }
    console.log()
}
console.log()
console.log("Using for each")
testMatrix.forEach((row) => {
    row.forEach(cell => {
        process.stdout.write(cell + " ")
    })
    console.log()
})