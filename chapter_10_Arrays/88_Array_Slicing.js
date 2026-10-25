let arr = [10, 20, 30, 40, 50]
//index 1 to 3 - [20, 30, 40]
let newArr = arr.slice(1, 4)
console.log(newArr)

//index 2 to 4 - [30, 40, 50]
newArr = arr.slice(2, 5);
console.log(newArr)

//index 2 to last index - [30, 40, 50]
//If end is undefined, then the slice extends to the end of the array.
newArr = arr.slice(2);
console.log(newArr)

//a negative index can be used to indicate an offset from the end of the array
//[20, 30, 40, 50]
newArr = arr.slice(-4);
console.log(newArr)

