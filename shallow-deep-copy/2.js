let obj = {
    name: 'kuro',
    age: 22,
    job:{
        'IT': {
            'language programming':['c', 'c++', 'c#', 'java', 'javascript', 'php', 'python']
        },
        other: ['Part-time', 'maid']
    },
    greeting: function(){
        console.log(`Hello ${this.name}`);
    },
    fat: NaN,
    high: undefined
}

// copy object

// Shallow copy
let obj2 = Object.assign({},obj)
obj2.name = 'kazuto'
obj2.job.other = 'abc'
console.log(obj.job.other)
console.log(obj2.job.other)

// Deep copy
// let deepCopy = items => 
let obj3 = JSON.parse(JSON.stringify(obj))
console.log(obj3.job)