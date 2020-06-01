function add(n) {
    this.intro = 'Result:';
    this.local = n;
    return function (number) {
        let result = this.local + number;
        console.log(this.intro + result);
    }
}

let result = add(2);
result(5)
