let arr = [1, 5, 9, 7, 3, 4, 6, 8, 10];

console.time('t1')
let result = null;
for(let i=0; i< arr.length; i++){
    if(arr[i] == 10){
        result = arr[i]
    }
}
console.timeEnd('t1')

console.time('t2')
let result2 = arr.filter(x => x === 10)
console.timeEnd('t2')