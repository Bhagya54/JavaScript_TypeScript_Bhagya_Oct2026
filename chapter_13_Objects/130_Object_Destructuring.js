const user = {
    name: "John",
    age: 30,
    city: "NY"
}

//Basic Destructuring
const { name, age } = user;
//const {city,name}=user - if you change order as well it works
console.log(name)
console.log(age)

//We can rename the variables while destructuring as well.
const { name: userName, age: userAge } = user;
console.log(userName)
console.log(userAge)

// Assigns a default value if the property does not exist in the object.
// This creates only a local variable and does NOT add a new property to the original object.
//JavaScript does this conceptually:
//const countryName = user.countryName !== undefined ? user.countryName : "USA";

const {countryName="USA"}=user
console.log(countryName)
console.log(user)

//Default value assigned to the existing property: city
//While trying to print the city we get the original value: "NY" itself
const {city="Tokyo"}=user
console.log(city)//NY

//If you WANT country inside the object
//Create a new object (better practice)

const updatedUser = { ...user, country: "Newze land" };
console.log(updatedUser);


const data={
    user : {
        name: "John",
        address: {
            city:"NYC"
        }
    }
}
console.log(data.user)//{ name: 'John', address: { city: 'NYC' } }
console.log(data.user.address)//{ city: 'NYC' }
console.log(data.user.address.city)//NYC

