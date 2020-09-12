Promise.resolve(2)
    .then(function (data) {
        // return Promise.reject(new Error('hmmm'))
        return Promise.all([setTimeout(() => console.log(data), 1), 2])
    })
    .then(data => console.log({ data }))
    .catch(err => console.log({ err }))

Promise.resolve('foo')
    .then(Promise.resolve('bar'))
    .then(function (result) {
        console.log(result);
    });