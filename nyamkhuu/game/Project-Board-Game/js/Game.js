
class Game{
    constructor(){
        this.board = new Board();
        this.player = this.createPlayer();
        this.ready = false;
    }
    // create player
    createPlayer(){
        const player1 = new Player("player1", "1", "#e15258");
        const player2 = new Player("player2", "2", "#e59a13", true);
        return [player1, player2];
    }

    get activePlayer(){
        return this.player.find(player => player.active);
    }

    startGame(){

        this.board.drawHTMLBoard();

        this.activePlayer.activeToken.drawHTMLToken();
        
        this.ready = true;

    }
    handleKeyDown(event){
        if(this.ready){
            if (event.key === "ArrowLeft"){
                this.activePlayer.activeToken.moveLeft();
        }else if ( event.key === "ArrowRight"){
            this.activePlayer.activeToken.moveRight(this.board.columns);
        }else if (event.key === 'ArrowDown'){
            console.log('moveDown')
        }else if (event.key === 'ArrowUp'){
            console.log('moveUP')
        }

        }
    }
}