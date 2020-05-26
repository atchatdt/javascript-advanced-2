class Profile {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    #year = 15;

    getYear(){
        return this.#year;
    }
}

// private variable
const obj = new Profile('kuro',22);

console.log(obj.name)
console.log(obj.getYear())