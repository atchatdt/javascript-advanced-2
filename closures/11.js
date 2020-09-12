function abc() {
    let n = 10
    function doSomething(i) {
        n += i
        console.log(n)
    }
    return doSomething
}


let foo = abc()
let bar = abc()
foo(5)
foo(5)
bar(6)
bar(6)