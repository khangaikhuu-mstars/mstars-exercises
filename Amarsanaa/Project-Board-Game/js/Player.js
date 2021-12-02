class Player {
  constructor(playerName, id, active = false) {
    this.playerName = playerName;
    this.id = id;
    this.active = active;
    this.token = this.createToken(21);
  }
}

//create player token
createTokens(numberOfToken){
    const tokens = [];
    for(let i=0; i < numberOfToken; i++){
        let token = new Token(i, this);
        token.push(token);
    }
    return tokens;
}
