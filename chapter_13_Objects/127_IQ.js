const user={
    name:"John",
    age:30,
    "email id":"john@example.com"
}
console.log(user)
console.log(user.name)
console.log(user["age"])

//Dynamic property access
const ageVal="age"
console.log(user[ageVal])

const emailKey="email id"
console.log(user[emailKey])

//Add/Modify properties
user.city="NYE"
user.age=78

console.log(user)