const arr = [
    x => x * 1, //2
    x => x * 2, //6
    x => x * 3, //24
    x => x * 4 //24 + 24*4 = 24+96 = 120
];

console.log(arr.reduce((agg, el) => agg + el(agg), 1));