function abc(a, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(a)
        }, time);
    })
}

async function handle1() {

    console.time('t')
    let a = abc(1, 1000)
    let b = abc(2, 2000)
    let c = abc(3, 3000)
    let [x, y, z] = await Promise.all([a, b, c])
    let sum = (await a) + (await b) + (await c)
    // let sum = x + y + z
    console.log({
        sum
    })
    console.timeEnd('t')
}
handle1()

// abc(10, 5000)
//     .then(a => console.log(a))
//     .catch(err => console.log(err))