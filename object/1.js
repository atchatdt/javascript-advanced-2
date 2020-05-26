const obj = {
    name: 'kazuto',
    age: 22,
    sex: 'male'
}
// Tạo object
const obj2 = Object.create(obj)

console.log(obj)
console.log(Object.keys(obj));
console.log(Object.values(obj));

for(let key in obj){
    console.log(obj[key])
}
