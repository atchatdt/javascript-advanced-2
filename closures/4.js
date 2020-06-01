var add = {
    intro: 'Result:',
    local: 5,
    abc: function () {
        console.log(this.intro)
    }
}

let result = add.abc.bind(add)
result()