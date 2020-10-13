console.log("hello mac")

function add(a, b) {
    return a+b;
}
console.log(add(2,4))

function multiply(a, b) {
    let result = 0;
    let count = 0;
    while (count<b) {
        result = add (a, result)
        count++
    }
    return result;
}
console.log(multiply(6,4))

function power(x, n) {
    let result = 1;
    let count = 0;
    while (count<n) {
        result = multiply (x, result)
        count++
    }
    return result;
}
console.log(power(2, 8))
console.log(power(3,4))


function factorial(x) {
    let result = 1;
    let count = 0;
    while (count<x) {
        result = multiply(x-count, result)
        count++
    }
    return result
}
console.log(factorial(5))
