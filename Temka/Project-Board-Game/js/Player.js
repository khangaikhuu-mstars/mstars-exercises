
class Player{
    constructor(name,id,active = false, color){
        this.name = name;
        this.id = id;
        this.active  = active;
        this.token = this.createTokens(21)
        this.color = color
    }
    createTokens(number){
        const tokens = [];
        for (let i =0;i < number; i++){
            const token = new Token(i,this)
            tokens.push(token)
        }
        return tokens;
    }

    get unusedTokens(){
        return this.tokens.filter(token => !token.dropped)
    }

    get activeToken(){
        return this.unusedTokens[0];

    }

}


// const player1 = new Player("Player1", "id1")
// const player2 = new Player("Player2", "id1", true)

// console.log(player1)