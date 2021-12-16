class Daalgavar {
   




    constructor(email, userName, birthday){
        this.email = email;
        this.userName = userName;
        this.birthday = birthday;
    }
     set  changeUsername(newUser){
      this.userName = newUser
    }

}

let user1 = new Daalgavar('Javascript@mstars.mn','JSUser1','01/08/1991')
user1.changeUsername = "tuvshee"
console.log(user1)