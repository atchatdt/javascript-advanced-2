let obj ={
    name: 'kazuto',
    age: 18
}

let obj2 = {
    sex: 'male',
    job: 'IT'
}
console.log({...obj,...obj2})
console.log(Object.assign(obj,obj2))