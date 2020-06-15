let a = {
    num: 10
};
let b = a;
b.num = 5
let c = b;

console.log({
    a,
    b,
    c
})

b.nums = a = {
    nums: 6
}

console.log({
    a,
    b,
    c
})