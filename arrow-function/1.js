// function normal
function sum(a, b) {
    return a + b;
}
// anonymous function
let sum1 = function (a, b) {
    return a + b;
}

// arrow function
let sum2 = (a, b) => {
    return a + b;
}

let sum3 = (a, b) => (a + b);

let sum4 = (a, b) => a + b;

console.log(sum(1,2));
console.log(sum1(1,2));
console.log(sum2(1,2));
console.log(sum3(1,2));
console.log(sum4(1,2));

