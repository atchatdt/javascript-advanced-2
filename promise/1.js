const arrPromise = [
    Promise.resolve('1'),
    Promise.resolve('2'),
    Promise.resolve('3'),
    Promise.reject('4')
]

async function handlerPromise() {

    // const pAll = await Promise.all(arrPromise);
    // const pAllS = await Promise.allSettled(arrPromise);
    // const pAny = await Promise.any(arrPromise);
    const pRace = await Promise.race(arrPromise);
    console.log(pRace);    
}
handlerPromise()