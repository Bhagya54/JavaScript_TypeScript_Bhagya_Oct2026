const obj = { a: 1, b: 2, c: 3 }

//Object.keys(<jsObjREf>) - Returns the keys as an array 
console.log(Object.keys(obj))//[ 'a', 'b', 'c' ]

//Object.values(<jsObjREf>) - Returns the values as an array 
console.log(Object.values(obj))//[ 1,2,3]

//Object.entries(<jsObjREf>) - Returns the array of entries([key,value])
console.log(Object.entries(obj))//[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

const user = { name: "John", age: 12 }

//for.. of - best for working with iterables(Arrays, Strings, Maps, Sets) 
console.log("Using for..of -  Best for Arrays, Strings, Maps, Sets")
for(let key of Object.keys(user)){//Object.keys(user) returns ["name","age"]
    console.log(`Using for..of -> ${key} : ${user[key]} `)
}

//for..in - best for working with JS Objects
console.log("Using for..in -  Best for JS Objects - object property names (keys)")
for(let key in user){//Object.keys(user) returns ["name","age"]
    console.log(`Using for..in -> ${key} : ${user[key]} `)
}


const emp2 = {
    name: "mohan",
    id: 267
}
//for..each
console.log("Using for each - only keys")
Object.keys(emp2).forEach(key=>{
    console.log(`${key} - ${emp2[key]}`)
})

console.log("Using for each - entries")
Object.entries(emp2).forEach(([key,value]) =>{
    console.log(`${key} - ${value}`)
})