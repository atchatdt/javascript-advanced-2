const scrambled = {
    2: 'e',
    5: 'o',
    1: 'h',
    4: 'l',
    3: 'l'
};

const result = Object.values(scrambled).reduce(
    (agg, el) => agg + el,
    ''
);
// Với key là number thì Object.value sẽ sắp xếp lại
// Đối với key bằng string thì không cần
console.log(Object.values(scrambled));

console.log(result);