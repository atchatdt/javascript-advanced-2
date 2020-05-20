function Animal(name, energy) {
    this.name = name;
    this.energy = energy;
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

const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 10)

const prototype =Object.getPrototypeOf(leo)
const prototype1 = Object.getPrototypeOf(snoop)

console.log(prototype, Animal.prototype);

console.log( prototype === Animal.prototype)
console.log( prototype1 === Animal.prototype)
