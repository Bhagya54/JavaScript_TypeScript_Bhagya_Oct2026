function makeCounter(start=0){
    let count=start;
    return{
        increment(){count++},
        decrement(){count--},
        get(){return count}
    }
}

let counter=makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log("Count after 3 increments:",counter.get())
counter.decrement();
console.log("Count after 1 decrement:",counter.get())
