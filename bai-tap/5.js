// Khi so sánh trang array
/**
 * ARRAY VS ARRAY
 * == không chuyển đổi gì cả chỉ quan tâm đến ô nhớ
 * < > Chuyển đổi mảng về dạng string để so sánh 
 * ARRAY VS NUMBER (mảng 1 phần tử)
 * == chuyển mảng về dạng number
 * ARRAY VS STRING 
 * < > == chuyển bảng về dạng string
 */

let a = [9,10]
let b = [10]


console.log(a == 9)
console.log(a == '9,10')
console.log(b == 10)

console.log(a > b)
console.log(a == b)