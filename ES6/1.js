// Truy vấn các thuộc tính object => gán
let person = {
   name: 'Nam',
   age: 24
};
let name = person.name;
let age = person.age;

// Hoán đổi vị trí => k dùng biết ngoài, có thể dùng với nhiều tham số: [a, b, c] = [b, c, a]
let a = 1;
let b = 2;
let temp = a;

a = b;
b = temp;

// Lấy thuộc tính lồng nhau và gán giá trị mặc định
const person = {
   name: 'Nam',
   age: 26,
   address: {
      street: 'Truong Chinh',
      city: 'Da Nang',
      country: 'Viet Nam',
   },
};

const {
   address: {
      country
   }
} = person; //=> lấy ra biến country