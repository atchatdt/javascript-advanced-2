let arr = [1, 5, 9, 7, 3, 4, 6, 8, 10];
let arr2 = [1, 5, 9, 7, 3, 4, 6, 8, 10];
console.time('t1')
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {

            arr[i] = arr[j] + arr[i];
            arr[j] = arr[i] - arr[j];
            arr[i] = arr[i] - arr[j];
        }
    }
}
console.timeEnd('t1')
console.log({
    arr
})

console.time('t2')
arr2 = arr2.sort((a, b) => a - b)
console.timeEnd('t2')
console.log({
    arr2
})