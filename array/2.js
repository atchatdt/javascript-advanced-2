let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let str = ['a', 'b', 'c', 'd', 'e']

// Kiểm tra các thuộc tính có thoã mãn hết với tất cả điều kiện
console.log(numbers.every(item => item < 10))

// Tìm kiếm trả về vị trí đầu tiên thoả điều kiện 
// => trả về giá trị
console.log(numbers.find(x => x > 5))

// Tìm kiểm trả về chỉ số( index) đầu tiên của phần tử thoã mãn điều kiện
//  => trả về chỉ mục( index)
console.log(numbers.findIndex(x => x > 5))


let arr = [1,2,[3,4],[5,6,[7,9]]]
console.log(arr.flat())