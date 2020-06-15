const person = { name: 'duthaho' };
 
function sayHi(age) {
  return `${this.name} is ${age}`;
}
 
console.log(sayHi.call(person, 69));
console.log(sayHi.bind(person, 69));