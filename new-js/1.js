const proFile = {
    details:{
        name: {
            firstName:'kazuto',
            lastName: 'kuro'
        },
        age: 22,
        yearOfBirth: 1998
    },
    job:{
        dev: {
            js: ['nodejs', 'reactjs','react native'],
            net: 'c#',
            another: ['c','c++','java']
        }
    }
}

// Check  object property nested
const name = proFile?.details?.name?.lastName


console.log(name);
