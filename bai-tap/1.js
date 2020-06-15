let str = 'b' + 'a' + +'a' + 'a'; // +'a' bị lỗi sẽ trả về NaN
console.log(str.toLowerCase())


let a = {
    n: 1
};
let b = a;
a.x = b = {
    n: 2
}
console.log(a)
console.log(b)