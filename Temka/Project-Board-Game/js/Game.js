class Game {
    constructor() {
        this.board = new Board()
        this.players = this.createPlayers()
        this.ready = false;
    }
    createPlayers() {
        const player1 = new Player('Player1', "1", '#e15258');
        const player2 = new Player('Player2', " 2", '#e59a13', true)
        return [player1, player2];
    }
    get activePlayer() {
        return this.players.find(player => player.active);
    }
    startGame(){
        this.board.drawHTMLboard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    handKeyDown(event){

        if (this.ready){
            if (event.key == "ArrowRight"){
                console.log("ArrowRight")
                this.activePlayer.activeToken.moveRight(this.board.columns)
            }else if(event.key == "ArrowLeft"){
                this.activePlayer.activeToken.moveLeft()
                console.log("Arrowleft")
            }else if (event.key == "ArrowDown"){
                console.log("ArrowDown")
            }else if (event.key === "ArrowUp"){
                console.log("ArrowUP")
            }
        
        }
     
    }

}
