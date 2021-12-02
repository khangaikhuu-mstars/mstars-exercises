class Player {
    constructor(name, id,color, active = false, ) {
        this.name = name;
        this.id = id;
        this.active = active;
        this.color = color;
        this.tokens = this.creatTokens(21);
    }
    // create player token
    creatTokens(number) {
        const tokens = [];
        for (let i = 0; i < number; i++) {
            const token = new Token(i, this);
            tokens.push(token);

        }
        return tokens;
    }

    get unusedToken(){
        return this.tokens.filter(token => !token.dropped);
    }

    get activeToken(){
        return this.unusedToken[0];
    }
}

