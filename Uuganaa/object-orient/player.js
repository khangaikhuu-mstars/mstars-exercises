class Player {
    constructor(name, id, color, active = false) {
        this.id = id
        this.active = active
        this.name = name
        this.tokens = this.createToken(21)
        this.color = color
    }

    createToken(number) {
        const tokens = []
        for (let i = 0; i < number; i++) {
            let token = new Token(i, this)
            tokens.push(token)
        }
        return tokens
    }
    get unusedToken() {
        return this.tokens.filter(token => !token.dropped)
    }
    get activeToken() {
        return this.unusedToken[0]
    }
}