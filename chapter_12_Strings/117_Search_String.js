let url="https://staging.vwo.com/api/login?locked=false&retry=false"

//includes - Returns true if searchString appears,else false
console.log(`url include "staging"? ${url.includes("staging")}`)
console.log(`url include "production"? ${url.includes("production")}`)

//startsWith and endsWith - Returns true or false
console.log(`url starts with "https"? ${url.startsWith("https")}`)
console.log(`url ends with "false"? ${url.endsWith("false")}`)

//indexOf('substring') - Returns the position of the first occurrence of a substring, or -1 if it is not present.
//lastIndexOf('substring) - Returns the last occurrence of a substring in the string, or -1 if it is not present.
console.log(`Index of "false" is: ${url.indexOf("false")}`)
console.log(`Last Index of "false" is: ${url.lastIndexOf("false")}`)
console.log(`Last Index of "invalid" is: ${url.lastIndexOf("invalid")}`)//-1

//search - Finds the first substring match in a regular expression search.
console.log("Search for 'login' in the given url:",url.search(/login/))
console.log("Search for 'vwo' in the given url:",url.search("vwo"))

//regex - / - regular expression