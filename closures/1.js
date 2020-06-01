function add(n) {
    let intro = 'Result:';
    let local = n;

    return function (number) {
        let result = local + number;
        console.log(intro + result);
    }
}

let result = add(2);
result(5)
// console.log(result(3))