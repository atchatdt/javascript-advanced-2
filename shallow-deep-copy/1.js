const obj = [null, NaN, undefined,Symbol(1)]
console.log(obj)
const str = JSON.stringify(obj)
const json = JSON.parse(str)

console.log(str);
console.log(json);
