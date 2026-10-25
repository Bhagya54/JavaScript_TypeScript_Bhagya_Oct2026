let browser=["chrome","firefox","safari","opera","edge"]
console.log("All array values:",browser)
console.log("Length of an array:",browser.length)

//Remove Edge - last element - pop()
browser.pop();
console.log("After removing edge:",browser)

//Remove chrome - first element - shift()
//shift() returns the removed element.
let removed=browser.shift();
console.log("After removing chrome:",browser)
console.log("Removed element:",removed)

//Iterate over the array
for(let i=0;i<browser.length;i++){
    console.log(`Value at index:${i} is ${browser[i]}`)
}
