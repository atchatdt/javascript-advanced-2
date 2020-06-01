let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let str = ['a', 'b', 'c', 'd', 'e']
console.log({
    numbers,
    str
});

// một cách khác tạo mảng
console.log({
    arrayFrom: Array.from('abc')
})

// kiểm tra tính đúng của mảng => true || false
console.log({
    isArray: Array.isArray(numbers)
})

// Nối mảng với mảng
let result = numbers.concat(str);
console.log({
    concat: result
})

// fill: thay thế những giá trị từ start đến end => bằng 1 giá trị
let num1 = [].concat(numbers)
result = num1.fill(0, 0, 5)
console.log({
    fill: result
})

// copyWithin thay những vị trí đầu = những giá trị khác: start - end
num1 = numbers.copyWithin(0, 3, 5)
console.log({
    copyWithin: result
})


console.log(numbers)