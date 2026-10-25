// Accessing & Modifying
let statuses = ["pass", "fail", "skip"];
console.log(`value at index 0: ${statuses[0]}`);
console.log(`All values: [${statuses}]`);

console.log(`value at last index(-1): ${statuses.at(-1)}`);
console.log(`value at index (-2): ${statuses.at(-2)}`);
console.log(`value at index (-3): ${statuses.at(-3)}`);
// console.log(statuses.at(-4)); undefined

// Modify
statuses[1] = "blocked";
console.log(statuses);
