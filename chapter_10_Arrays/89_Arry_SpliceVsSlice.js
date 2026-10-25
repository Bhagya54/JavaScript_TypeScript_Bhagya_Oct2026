let arr = [10, 20, 30, 40, 50];
console.log("Original Arr:", arr)
console.log("****Splice Example*****")
let removed = arr.splice(1, 2, 45, 67)//remove 2 elements starts from index 1 and replace with 45,67 - [10, 45,67,40, 50]
console.log("After splice() - New Array:", arr)
console.log("Removed elements:", removed)
console.log("--------------------------")
console.log("****Slice Example*****")
let newArr = arr.slice(1, 4)
console.log("Original Array:", arr)
console.log("After slice() - New Array:", newArr)