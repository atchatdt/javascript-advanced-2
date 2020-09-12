const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();
foo();
baz();

let arr = [1,2,3]
arr[10] = 10
console.log(arr)