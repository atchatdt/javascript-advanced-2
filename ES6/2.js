let arr = []
for (let i = 0; i <= 90; i++) {
    arr.push(i);
}
console.time('t1')
let arrResult1 = arr.map(x => x * 2).filter(x => x > 2)
console.timeEnd('t1')

console.time('t2')
let arrResult2 = arr.reduce((x, y) => ((y * 2) > 2) ? [...x, y * 2] : x, [])
console.timeEnd('t2')