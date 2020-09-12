const arrPeople = [{
    name: 'abc',
    country: 'Vietnam'
}, {
    name: 'xyz',
    country: 'Usa'
}]
// function printPeople(people, action) {
//     for (let i = 0; i < people.length; i++) {
//         action(people[i]);
//     }
// }

// function action(person) {
//     if (person.country === "Vietnam") {
//         console.log(person);
//     }
// }

// printPeople(arrPeople, action);

const inVietnam = person => person.country === 'Vietnam';
arrPeople.filter(inVietnam("Vietnam")).map(console.log);
