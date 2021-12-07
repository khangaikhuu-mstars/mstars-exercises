

class User{
    constructor(email, username, birthday){
        this.email = email;
        this.username = username;
        this.birthday = birthday;
    }
    changeUsername(username){
        this.username = username;
    }
}


let user = new User ('Javascript@mstars.mn', 'JSUser1', '01/08/1991');
user.changeUsername('Temuulen')

console.log(user)