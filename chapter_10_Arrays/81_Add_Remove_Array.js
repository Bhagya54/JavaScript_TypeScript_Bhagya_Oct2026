let arr = [11, 12, 13]

//Appends new elements to the end of an array, and returns the new length of the array.
console.log("push()-appends to end and returns the length of new array:", arr.push(14, 15))
console.log("New Array after the append(push)", arr)

//Removes the last element from an array and returns that deleted value. 
console.log("pop()-deletes last ele and return the deleted value:", arr.pop())
// If the array is empty, undefined is returned and the array is not modified.
let arr1 = []
console.log("pop() returns undefined if arr is empty:", arr1.pop())

//Inserts new elements at the start of an array, and returns the new length of the array.
console.log("unshift returns new length:", arr.unshift(120, 130))
console.log("New Array after the append(unshift)", arr)

//Removes the first element from an array and returns it. 
//If the array is empty, undefined is returned and the array is not modified.
console.log("shift() returns the deleted value", arr.shift())
console.log("shift() returns undefined if arr is empty:", arr1.shift())