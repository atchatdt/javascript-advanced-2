// Deep copy array

const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);

var nestedArray = [1, null, undefined, () => 2, {
    test: () => 3,
}, Symbol('4')]

var arrayCopy = clone(nestedArray)
//thay đổi giá trị ban đầu
arrayCopy[0] = '?'; // change shallow element
console.log(arrayCopy); 
console.log(nestedArray);