class Player {
    constructor(name, id, color, active = false){
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    // Create players' token

    createTokens(number) {
        const tokens = [];
        for(let i = 0; i < number; i++) {
            const token = new Token(i, this);
            tokens.push(token);
        }
        return tokens;
    }

    get unusedToken() {
        return this.tokens.filter(token => !token.dropped);
    }

    get activeToken() {
        return this.tokens[0];
    }
}