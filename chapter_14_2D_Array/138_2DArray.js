let scores = [
    [85, 95, 78],
    [60, 45, 70],
    [95, 88, 92],
]

//Calculate row sum of a 2d array
let rowSum = scores.map(row => row.reduce((a, b) => a + b))
console.log("Row sum:", rowSum)

//Diagonal sum
let leftDiagonalSum = 0;
let rightDiagonalSum = 0;
for (let i = 0; i < scores.length; i++) {
    for (let j = 0; j < scores[i].length; j++) {
        if (i === j) {
            leftDiagonalSum += scores[i][j]
        }

        //For a square matrix - Right Diagonal Values are: i + j === scores.length - 1
        //3X3 matrix - right diagonal values are 2 0 and 0 2 - 0+2 or 2+0 = 2(i.e 3-1)
        //4X4 matrix - right diagonal values are (3,0),(0,3),(1,2) and (2,1) = 3(i.e 4-1)
        
        else if (i + j === scores.length-1) {
            console.log(i, j)
            rightDiagonalSum += scores[i][j]
        }
    }
}

console.log(`Left Diagonal Sum: ${leftDiagonalSum} + Right Diagonal Sum:${rightDiagonalSum} = ${leftDiagonalSum+rightDiagonalSum}`)

//double each values of the array
let arr2 = [2, 3, 4]
let doubleArrVal = arr2.map(a => a * 2)
console.log("After each value * 2: ", doubleArrVal)

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],
    ["search-pass", "filter-fail", "sort-pass"],
    ["checkout-fail", "payment-fail", "confirm-pass"]
]

//Find suiteResults which are fail
//includes() checks if something exists inside a string/array
for (let row of suiteResults) {
    for (let cell of row) {
        if (cell.includes("fail")) {
            console.log("Failed Suite:", cell)
        }
    }
}