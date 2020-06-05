let id = Symbol('id')

let id2 = Symbol.for('id')
let id3 = Symbol.for('id')
console.log(id)
console.log(id2)
console.log(id3)
console.log(id==id2)
console.log(id3==id2)