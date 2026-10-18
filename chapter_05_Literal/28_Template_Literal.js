let lang = "Java Script"
console.log(`${lang} prefers single quotes`)

let fname = "bhagya"
let fullName = `Hi ${fname} kudupudi`
console.log(fullName)

let env = "staging"
let userId = 1234
env = "production"
const apiUrl = `https://api-${env}.wipro.com/users/${userId}`;
console.log(`API url is: ${apiUrl}`)

//Playwright
const rowIndex = 3
const colName = "email"
const result = `[data-row="${rowIndex}"] [data-col="${colName}"]`
console.log(result)
//await page.locator(result).click();

//logs
const testName = "Login Test"
const status = "Failed"
const duration = 2.3
console.log(`${testName}: ${status} executed in ${duration} minutes`)

//screenshot
const testCase = "checkout_flow"
//Date.now() returns the number of milliseconds since 1 Jan 1970, 00:00 UTC (the "Unix epoch"). It's a plain number, for example 1791460800000
const timeStamp = Date.now();
console.log(`path:screenshots/${testCase}_${timeStamp}.png`)
//await page.screenshot({path:`screenshots/${testCase}_${timeStamp}.png`})

const username = "bhagya";
const role = "developer"
const payload = `{
"user":"${username}",
"role":"${role}",
"timestamp":"${new Date().toISOString()}"
}`;
console.log(payload)

/*Notes for "timestamp":"${new Date().toISOString()}"
new Date() creates a date for the current moment, which JavaScript stores internally as the same milliseconds-since-1970 number. .toISOString() then turns it into a readable text string in ISO 8601 format, the standard date format used by most APIs.

What each part of the result means:


2026-10-08T10:15:30.123Z
Part	Meaning
2026-10-08	year-month-day
T	separates the date from the time
10:15:30	hours:minutes:seconds (24-hour clock)
.123	milliseconds
Z	"Zulu" time, which is UTC (time zone offset 0)
Watch out: toISOString() always gives the time in UTC, not your local time. For example, India time (IST) is UTC + 5:30, so 3:45 PM in India shows as 10:15:30Z.
*/