// Khi giá trị trả về là: object,array, function
// Thì trả về giá trị đó 
function Animal(name, age){
    this.name = name;
    this.age = age;
    // return {
    //     speak: 'gau gau',
    //     eat: 'fish'
    // }
    // return [1,2,3]
    return function(){
        console.log('OK oK')
    }
}

let cat = new Animal('meo',18);
console.log(cat);
// console.log(cat()); cách gọi function