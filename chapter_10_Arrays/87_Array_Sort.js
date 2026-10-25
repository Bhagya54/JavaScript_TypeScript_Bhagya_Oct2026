let fruits = ["banana", "apple", "cherry"]
fruits.sort()
console.log(fruits)

let numbers = [3, 1, 4]
numbers.sort()
console.log(numbers)

//lexical sorting - sorts by first character
let arrNum = [30, 5, 100, 20]
arrNum.sort()
console.log(arrNum)

// Ascending sort
arrNum.sort((a, b) => a - b);
console.log("Ascending sort", arrNum)

/* 
   a-b - positive - swap the order
   a-b - negative - keep the order
   a-b - = 0      - keep the order
*/

// Descending sort
arrNum.sort((a, b) => b - a);
console.log("Descending sort", arrNum)
/* 
   b-a - positive - swap the order
   b-a - negative - keep the order
   b-a - 0        - keep the order
*/