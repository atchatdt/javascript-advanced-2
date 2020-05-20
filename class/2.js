function User(name,email) {
    this.name = name;
    this.email = email;
    this.online = false;
}

User.prototype.login = function(){
    this.online  = true;
    console.log(`${this.name} is logged`);
}

User.prototype.logout = function(){
    this.online = false;
    console.log(`${this.name} logout`);
}

function Admin(...args){
    User.apply(this,args)
    this.role = 'admin';
}
// giống kiểu kế thừa
Admin.prototype = Object.create(User.prototype)

Admin.prototype.deleteUser = function(u){
    users = users.filter(user => user.name !== u.name)
}

let userOne = new User('kazuto','kazuto@gmail.com');
let userTwo = new User('kazuta','kazuta@gmail.com');
let admin = new Admin('admin','admin@gmail.com');

let users = [userOne,userTwo,admin]
// console.log(userOne);
// userOne.login();
// console.log(userOne);

// console.log(admin)
// admin.login()
admin.deleteUser(userTwo)
console.log(users)
// console.log(Object.getPrototypeOf(admin))
// console.log(Object.getPrototypeOf(userOne))
