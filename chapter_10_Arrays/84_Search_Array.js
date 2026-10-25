let arrayA = [23, 45, 12, 23, 67, 45]

//indexOf - returns index of first matching element, or -1 if not found
console.log(arrayA.indexOf(23))//0
console.log(arrayA.indexOf(230))//-1

//lastIndexOf - searches from end
console.log(arrayA.lastIndexOf(45))//5
console.log(arrayA.indexOf(100))//-1

//includes
console.log(arrayA.includes(23))//true
console.log(arrayA.includes(234))//false

//find - Returns the value of the first element in the array where predicate is true, and undefined otherwise.
console.log(arrayA.find(x=>x>40))//45
console.log(arrayA.find(x=>x>400))//undefined

//findIndex - Returns the index of the first element in the array where predicate is true, and -1 otherwise.
console.log(arrayA.findIndex(x=>x>40))//1
console.log(arrayA.findIndex(x=>x>400))//-1

//findLast - Returns the value of the last element in the array where predicate is true, and undefined otherwise.
console.log(arrayA.findLast(x=>x>40))//45
console.log(arrayA.findLast(x=>x>400))//undefined

//findIndex - Returns the index of the last element in the array where predicate is true, and -1 otherwise.
console.log(arrayA.findLastIndex(x=>x>40))//5
console.log(arrayA.findLastIndex(x=>x>400))//-1