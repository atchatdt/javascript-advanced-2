console.time('t1')
function handleNumber(a, b, callback) {
    return callback(a, b)
}

let sum = (a, b) => a + b
let multi = (a, b) => a * b
let sub = (a, b) => a - b
let div = (a, b) => a / b

console.log(handleNumber(1, 2, sum))
console.timeEnd('t1')

console.time('t2')

function handleNumber2(a, b, phepTinh) {
    if (phepTinh == '+') {
        return a + b
    }
    if (phepTinh == '-') {
        return a - b
    }
    if (phepTinh == '*') {
        return a * b
    }
    if (phepTinh == '/') {
        return a / b
    }
}
console.log(handleNumber2(1, 2, '+'))
console.timeEnd('t2')


