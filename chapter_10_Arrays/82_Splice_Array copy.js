let arr = [10, 20, 30]
arr.push(40, 50, 60);
console.log(arr)
//arr=[ 10, 20, 30, 40, 50, 60 ]
//index [0,  1,  2,  3,  4,  5]

//arr.splice(2, 1)//delete - [ 10, 20, 40, 50, 60 ]
//console.log(arr)

//arr.splice(2,0,99)//add - [ 10, 20, 99, 30, 40, 50, 60 ]
//console.log(arr)

// arr.splice(2,1,99)//replace - [ 10, 20, 99, 40, 50, 60 ]
// console.log(arr)

arr.splice(2, 2, 99, 100)//replace - [ 10, 20, 99, 100, 50, 60 ]
console.log(arr)