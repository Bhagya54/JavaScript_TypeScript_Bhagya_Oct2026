const calculator = {
    a: 60,
    b: 20,
    add() {
        return this.a + this.b
    },
    sub() {
        return this.a - this.b
    },
    mul() {
        return this.a * this.b
    },
    div() {
        return this.a / this.b
    }
}

console.log("Add:", calculator.add())
console.log("Subtract:", calculator.sub())
console.log("Multiply:", calculator.mul())
console.log("Divide:", calculator.div())


console.log("Find a number is prime")
const prime = {
    n: 7,
    isPrime() {
        const num = this.n;
        for (let i = 2; i < num / 2; i++) {
            if (num % i === 0) {
                return "Not Prime"
            }
        }
        return "Prime"
    }
}

console.log(`isPrime(${prime.n}):${prime.isPrime()}`)