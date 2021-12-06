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

    playToken(){

        let activeToken = this.activePlayer.activeToken;
        let spaces = this.board.spaces
        let targetColumn = spaces[activeToken.columnLocation]
        let targetSpace = null
        

        for (let space of targetColumn){
 
            if (space.token === null){
                targetSpace = space;
                
            }
        }
       
        if (targetSpace !== null){
            this.ready = false;
            activeToken.drop(targetSpace,()=>{
                this.updateGameState(activeToken, targetSpace);
            })
        }


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
                this.playToken();
                // this.activePlayer.activeToken.drop(target, ()=>{
                //     console.log("reset")
                // })
            }else if (event.key === "ArrowUp"){
                console.log("ArrowUP")
            }
        
        }
     
    }

    gameOver(message){
        gameO = document.getElementById('game-over')
        gameO.style.display = 'block';
        gameO.textContent = message; 
    }

    updateGameState(token, target){
        console.log(target)
        target.mark(token);

        if(!this.checkForWing(target)){
            console.log("game is continueing")
            //switch active players
            this.switchPlayer();

            if(this.activePlayer.checkTokens()){
                console.log(this.activePlayer)
                this.activePlayer.activeToken.drawHTMLToken();
                this.ready = true;
            }else{
                this.gameOver('No more tokens!');
            }
        }else {
            this.gameOver(`${target.owner.name} wins!`)

        }


    }
    
    switchPlayer(){
        for (let player of this.players){
            if(player.active){
                player.active = false;
            } else{
                player.active =true;
            }
        }
    }



    checkForWing(target){
        let win = false;

        const owner = target.token.owner;

        //Vertical
        for (let x=0; x < this.board.columns; x++){
            for(let y=0; y< this.board.rows - 3; y++){
                console.log(this.board.spaces[x][y].owner)
                if(this.board.spaces[x][y].owner === owner && 
                    this.board.spaces[x][y+1].owner === owner &&
                    this.board.spaces[x][y+2].owner === owner &&
                    this.board.spaces[x][y+3].owner === owner
                    ){
                        win = true
                    }
            }
        }
        // Horizantal
        for (let x=0; x < this.board.columns - 3; x++){
            for(let y=0; y< this.board.rows; y++){
                if(this.board.spaces[x][y].owner === owner && 
                    this.board.spaces[x+1][y].owner === owner &&
                    this.board.spaces[x+2][y].owner === owner &&
                    this.board.spaces[x+3][y].owner === owner
                    ){
                        win = true
                    }
            }
        }

        // diagonal from left top to right bottom
        for (let x=3; x < this.board.columns; x++){
            for(let y=0; y< this.board.rows; y++){
                if(this.board.spaces[x][y].owner === owner && 
                    this.board.spaces[x+1][y-1].owner === owner &&
                    this.board.spaces[x+2][y-2].owner === owner &&
                    this.board.spaces[x+3][y-3].owner === owner
                    ){
                        win = true
                    }
            }
        }

        // diagonal from top righ to bottom left
        for (let x=3; x < this.board.columns; x++){
            for(let y=0; y< this.board.rows - 3; y++){
                if(this.board.spaces[x][y].owner === owner && 
                    this.board.spaces[x-1][y+1].owner === owner &&
                    this.board.spaces[x-2][y+2].owner === owner &&
                    this.board.spaces[x-3][y+3].owner === owner
                    ){
                        win = true
                    }
            }
        }







        return win;
    }







}
