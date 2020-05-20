function Animal(name, energy) {

    // Tạo constructor với prototype
    let animal = Object.create(Animal.prototype);
    animal.name = name;
    animal.energy = energy;
    return animal;
}

Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating`);
    return this.energy += amount
}

Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
}

Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)
console.log({leo,snoop})
leo.eat(10)
console.log({leo,snoop})