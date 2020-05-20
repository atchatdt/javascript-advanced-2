// Không nên dùng if... else if...
// Khử nó chỉ dùng if thôi 

// Tập hợp lưu thành mảng đễ xét hơn
['cat', 'dog', 'turtle'].includes(animal);


// Gọp lại thành object đầu vào cho dễ xét hơn
const printAnimalDetails = ({
    type,
    name,
    gender
} = {}) => {
    if (!type) return 'No animal type';
    if (!name) return 'No animal name';
    if (!gender) return 'No animal gender';

    return `${animal.name} is a ${animal.gender} ${animal.type}`;
}

// Thay cho switch.. case
function printFruits(color) {
    const fruitColor = {
        red: ['apple', 'strawberry'],
        yellow: ['banana', 'pineapple'],
        purple: ['grape', 'plum']
    };
    return fruitColor[color] || [];
}

// params mặc định + destructuring
function printVegetableName({
    name
} = {}) {
    console.log(name || 'unknown');
}

// Nên dùng: Array.every, Array.some