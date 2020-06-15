function getType(obj) {
    const str = Object.prototype.toString.call(obj);
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    return map[str];
}

//for array
function copyArray(ori, type, copy = []) {
    for (const [index, value] of ori.entries()) {
        copy[index] = deepCopy(value);
    }
    return copy;
}

//for object
function copyObject(ori, type, copy = {}) {
    for (const [key, value] of Object.entries(ori)) {
        copy[key] = deepCopy(value);
    }
    return copy;
}

//for function
function copyFunction(ori, type, copy = () => {}) {
    const fun = eval(ori.toString());
    fun.prototype = ori.prototype
    return fun
}


function deepCopy(ori) {
    const type = getType(ori);
    let copy;
    switch (type) {
        case 'array':
            return copyArray(ori, type, copy);
        case 'object':
            return copyObject(ori, type, copy);
        case 'function':
            return copyFunction(ori, type, copy);
        default:
            return ori;
    }
}
let originObject = {
    a: 1,
    b: 2,
    c: {
        d: 3
    },
    e: NaN,
    f: null,
    d: undefined
}
let obj = {
    name: 'kuro',
    age: 22,
    job: {
        'IT': {
            'language programming': ['c', 'c++', 'c#', 'java', 'javascript', 'php', 'python']
        },
        other: ['Part-time', 'maid']
    },
    greeting:() =>{
        console.log(`Hello ${name}`);
    },
    fat: NaN,
    high: undefined
}
let result = deepCopy(obj)
result.job.other = 'ok'
console.log(obj)
console.log(result)