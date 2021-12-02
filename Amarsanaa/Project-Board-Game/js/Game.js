class Game {
    constructor(){
        this.board = new Board();
        this.player = this.createPlayer();
    }
}

createPlayer(){
    const player1 = new Player("player1", "1", "#e15258");
    const player2 = new Player("player2","2","#e59a13");
    return [player1, player2];
}

get activePlayer(){
    return this.player.find(player=>player.active);
}
