
class Player{
    
    constructor(name, id, color, active = false ){
        this.name = name;
        this.id = id;
        this.active = active;
        this.token = this.createToken(21);
        this.color = color;
    }
    //create player token
    createToken(number) {
        const tokens = [];
        for (let i = 0; i < number; i++){
            const token = new Token(i , this);
            tokens.push(token);
        }
        return tokens;
    }
    get unusedTokens () {
        return this.token.filter(token => !token.dropped);
    }


    get activeToken(){
        return this.unusedTokens[0]
    }
}


