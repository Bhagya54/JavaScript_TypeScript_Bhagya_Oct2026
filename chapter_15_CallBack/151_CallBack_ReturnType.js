function calculate(a, b, operation) {
    return operation(a, b);
}

const sum = calculate(10, 5, function (x, y) {
    return x + y;
})

console.log(sum)

