let arrResult = []
for (let i = 1; i <= 100; i++) {
    let str = '';
    let ba = false;
    let nam = false;
    if (i % 3 == 0) {
        str = 'Fizz'
        ba = true
    }
    if (i % 5 == 0) {
        str = 'Buzz'
        nam = true
    }
    if (ba && nam) {
        str = 'FizzBuzz'
    }
    if (ba || nam) {
        arrResult.push({ i,str })
    } else {
        arrResult.push(i)
    }
}

console.log(arrResult)
