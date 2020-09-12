function abc() {
    this.a = 10
    method = function () {
        console.log(this.a)
    }
    method2 = () => {
        console.log(this.a)
    }
}


let a = abc()
console.log(a)