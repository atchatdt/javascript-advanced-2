// Function declaration sẽ có độ ưu tiên hơn variable declaration khi hoisting
//Trong trường hợp chúng ta có các khai báo trùng lặp (duplication declaration) hoặc 
//gặp một phép gán (assignment) thì giá trị sẽ của biến hay function sẽ được thay thế
bar();
 
var bar;
 
function bar() {
  console.log('first');
}
 
bar = function() {
  console.log('second');
};
 
bar();
 
foo();
 
function foo() {
  console.log(1);
}
 
var foo = function() {
  console.log(2);
};
 
function foo() {
  console.log(3);
}
 
foo()