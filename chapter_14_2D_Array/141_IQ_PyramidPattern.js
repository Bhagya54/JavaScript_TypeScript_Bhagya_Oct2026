/* 
n=4 
      *
    * * *
  * * * * *
* * * * * * *
*/
let n = 4;
for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
        process.stdout.write("  ")
    }
    for (let j = 1; j < i; j++) {
        process.stdout.write("* ")
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }

    console.log()
}