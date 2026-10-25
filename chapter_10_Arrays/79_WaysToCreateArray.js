//Creation of an Array(Preferred way)
let browser = ["Chrome", "Firefox", "Edge"]

//Array Constructor
let scores1 = new Array(3);
let scores2 = new Array(1, 2, 3);
console.log(scores1)
console.log(scores2)

let numbers = new Array(100, 200, 300, 400, 500)
console.log(numbers[3])//400

//Using Array.of()
let test = Array.of(10, 20, 30, 40, 50)
console.log(test)

//Using Array.from()
let characters = Array.from("hello")
console.log(characters)
