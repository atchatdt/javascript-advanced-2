function withVar() {
    const b = () => a;
    var a = 24;
    return b;
}

function withLet() {
    const b = () => a;
    let a = 24;
    return b;
}

function changingValue() {
    let a = 24;
    const b = () => a;
    a = 42;
    return b;
}

console.log(withVar()()); // ??
console.log(withLet()()); // ??
console.log(changingValue()()); // ??