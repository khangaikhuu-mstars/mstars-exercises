class Daalgavar {
    constructor(email, userName, birthday){
        this.email = email;
        this.userName = userName;
        this.birthday = birthday;
    }
    changeUsername(){
      return   ` ene bol shin hereglegchiin ner ${this.userName}`
    }
}

let user1 = new Daalgavar('Javascript@mstars.mn','JSUser1','01/08/1991')
let user2 = new Daalgavar('JSmstars','Tuvshinbat','1990.04.19',)   
console.log(user1)
console.log(user2.changeUsername())