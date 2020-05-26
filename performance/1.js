const users = [{
    name: 'Ronaldo',
    age: 23
}, {
    name: 'Messi',
    age: 14
}, {
    name: 'Anoystick',
    age: 22
}]

// the reduce method
const valid = users.reduce((acc, {
    age,
    name
}) => {
    return (age >= 18) ? [...acc, name] : acc;
}, []);

console.log(valid);
