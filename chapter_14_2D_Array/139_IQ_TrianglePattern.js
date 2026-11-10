//n=3
/*
*
* *
* * *
*/
let n=3;
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write("* ")
    }
    console.log()
}

/*
1
2 3
4 5 6
7 8 9 10
*/

let n1=4;
let count=1;
for(let i=1;i<=n1;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(count+" ")
        count++;
    }
    console.log()
}

