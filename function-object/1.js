// Không trả về 5
// Trả về this

function Animal(name, age){
    this.name = name;
    this.age = age;
    return 5;
}

let cat = new Animal('meo',18);
console.log(cat);