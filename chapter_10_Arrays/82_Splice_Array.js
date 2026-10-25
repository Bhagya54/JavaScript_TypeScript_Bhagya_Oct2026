let arr = [10,20,30]
console.log(`Before splice:[${arr}]`)//[10,20,30]
//start from index 1,delete 2 items and replace with 78,90 - replace
//arr.splice(1,2,78,90) returns deleted items
console.log("arr.splice(1,2,78,90) returns deleted items",arr.splice(1,2,78,90))//[20,30]
console.log(`After splice:[${arr}]`)//[10,78,90]

//start from index 2,replace 0 values with 60
console.log("arr.splice(2,0,60)): start from index 2,replace 0 values with 60")
arr.splice(2,0,60)//add
console.log(arr)//[10,78,60,90]

//start from 0th index and delete 1 item
console.log("arr.splice(0,1): start from 0th index and delete 1 item")
arr.splice(0,1)//acts as a delete 
console.log(arr)//[78,60,90]