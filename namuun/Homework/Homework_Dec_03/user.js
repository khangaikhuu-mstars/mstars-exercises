class User {
    constructor(email, username, birthday){
        this.email = email;
        this.username = username;
        this.birthday = birthday;
    }
    set changeUsername(newUsername) {
        this.username = newUsername
    }
}

let user1 = new User("javascript@mstars.mn", "JSUser1", "01/08/1991");
user1.changeUsername = "new username"
console.log(user1)