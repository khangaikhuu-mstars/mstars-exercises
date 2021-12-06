class User {
    constructor(email, username, birthday){
        this.email = email;
        this.username = username;
        this.birthday = birthday;
    }
    set changeUsername(newUser){
        this.username = newUser;

    }
}

let user1 = new User("Javascript@mstars.mn", "JSUser1", "01/08/1991")

user1.changeUsername = "yourName"

console.log(user1)