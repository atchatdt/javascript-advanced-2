const a = {};
const b = { key: 'b' };
const c = { key: 'c' };
 
a[b] = 123;   //Tương đương a["object Object"] = 123
a[c] = 456;   //Tương đương a["object Object"] = 456
 
console.log(a[b]);