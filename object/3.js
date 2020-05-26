const obj = {
    name: 'object',
    age: 18,
    job: {
        a: 1,
        b: 2,
        c: 3
    }
}
let i=0;
const deepFreeze = obj => {
   Object.keys(obj).forEach(prop =>{
       
       if(obj[prop] == 'object' && !Object.isFrozen(obj[prop])) {deepFreeze(obj); console.log(i++);}
   })
   return Object.freeze(obj)
}

deepFreeze(obj)
console.log('end')
// const obj2 = Object.freeze(obj)
// obj2.name = 'aklsjd'
// obj2.job.a = 5
// console.log(obj2)