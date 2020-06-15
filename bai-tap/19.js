// Khi gọi 1 phương thức: sẽ ưu tiên tìm trong object trước,
// nếu không có thì mới tìm đến prototype
function Dog(name) {
    this.name = name;
    this.speak = function() {
      return 'woof';
    };
  }
   
  const dog = new Dog('Pogo');
   
  Dog.prototype.speak = function() {
    return 'arf';
  };
   
  console.log(dog.speak());