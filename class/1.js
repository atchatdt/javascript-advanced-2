class User {
    constructor(name = 'kazuto', email = 'kazuto@gmail.com') {
        this.name = name;
        this.email = email;
        this.score = 0;
    }
    login() {
        console.log(`${this.name} id logged`);
        return this;
    }
    logout() {
        console.log(`${this.name} is logout`);
        return this;
    }
    updateScore(num = 1){
        this.score += num;
        return this;
    }
    getScore(){
        console.log(this.score);
        return this;
    }
}
class Admin extends User{

    deleteUser(user){
        users = users.filter(item => item.email !== user.email)
    }
}

let userOne = new User();
let userTwo = new User('kazuta','kazuta@gmail.com');
let admin = new Admin('admin','admin@gmail.com');

let users = [userOne,userTwo,admin];
// admin.deleteUser(userOne);
userOne.deleteUser(admin)

console.log(users)
console.log(admin)

// Điều kiện mỗi hàm phải trả về this => giống kiểu callback(promise)
// user.login()
// .logout()
// .getScore()
// .updateScore(5)
// .getScore()