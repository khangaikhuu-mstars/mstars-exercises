class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active
        this.tokens = this.createTokens(21);
    }
    //Creation of tokens
    createTokens(number) {
        const tokens = [];
        for (let i = 0; i < number; i++) {
            let token = new Token(i, this);
            tokens.push(token);
        }
        return tokens;
    }
    get unusedTokens() {
        return this.tokens.filter(token => !token.dropped)
    }
    get activeToken() {
        console.log("active Token :" + this.unusedTokens[0])
        return this.unusedTokens[0];
    }

    checkTokens(){
        return this.unusedTokens.length !== 0;
    }

}