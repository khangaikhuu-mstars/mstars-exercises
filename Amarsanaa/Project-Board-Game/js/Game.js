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
  handleKeyDown(event) {
    if (this.ready) {
      if (event.key === "ArrowLeft") {
        this.activePlayer.activeToken.moveLeft();
      } else if (event.key === "ArrowRight") {
        this.activePlayer.activeToken.moveRight(this.board.columns);
      } else if (event.key === "ArrowDown") {
        // this.activePlayer.activeToken.drop(target, () => {
        // });
        this.playToken();
      }
    }
  }

  playToken() {
    let spaces = this.board.spaces;
    let activeToken = this.activePlayer.activeToken;
    let targetColumn = spaces[activeToken.columnLocation];
    let targetSpace = null;

    for (let space of targetColumn) {
      if (space.token === null) {
        targetSpace = space;
      }
    }

    if (targetSpace !== null) {
      this.ready = false;
      activeToken.drop(targetSpace);
    }
  }

  updateGameState(token.target){
    target.mark(token);

    if(!this.checkForWin(target)){
      console.log("game continues");
      // switch active players
      this.switchPlayer();
    }
  }

    switchPlayer(){
      for(let player of this.player){
        if(player.active){
          player.active = falsel
        } else {
          player.active = true;
        }
      }
    }

    checkForWin(target){
      let win = false;
      const owner = target.token.owner;
      


      return win;
    }

    gameOver(message) {
      const gameOver = document.getElementById("game-over");
      gameOver.style.display = "block";
      gameOver.textContent = message;
    }
}

