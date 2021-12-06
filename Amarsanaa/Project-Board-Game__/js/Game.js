class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  createPlayers() {
    const player1 = new Player("player1", "1", "#e15258");
    const player2 = new Player("player2", "2", "#e59a13", true);
    return [player1, player2];
  }

  get activePlayer() {
    return this.players.find((player) => player.active);
  }

  startGame() {
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }

  handleKeyDown(e) {
    if (this.ready) {
      if (e.key === "ArrowLeft") {
        this.activePlayer.activeToken.moveLeft();
      } else if (e.key === "ArrowRight") {
        this.activePlayer.activeToken.moveRight(this.board.columns);
      } else if (e.key === "ArrowDown") {
        //handle drop down event here
      }
    }
  }
}