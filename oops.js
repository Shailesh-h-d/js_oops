class User {
    constructor (name, email) {
        this.name = name;
        this.email = email;
        this.score = 0;
    }
    login() {
        console.log(`${this.email} is logged in`);
        return this;
    }
    logout() {
        console.log(`${this.email} is logged out`);
        return this;
    }
    updateScore() {
        this.score++;
        console.log(`current score is ${this.score}`);
        return this;
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }

    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user1.email
        })
    }
}

var user1 = new User("shailesh", "shailesh@gmial.com");
var user2 = new User("test", "test@gmail.com");
var user3 = new User("kjjkv", "kjjkv@gmail.com");
var admin1 = new Admin("admin1", "admin1@gmail.com");

var users = [user1, user2, user3];

admin1.deleteUser(user2);

console.log(users);

