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
    startGame() {
        this.board.drawHTMLboard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }
    handleKeyDown(event) {
        if (this.ready) {
            if (event.key == "ArrowRight") {
                this.activePlayer.activeToken.moveRight(this.board.columns);
            } else if (event.key == "ArrowLeft") {
                this.activePlayer.activeToken.moveLeft();
            } else if (event.key == "ArrowDown") {
                this.playToken()

            }
        }
    }
    playToken() {
        let spaces = this.board.spaces
        let activeToken = this.activePlayer.activeToken;
        let targetColumn = spaces[activeToken.columnLocation];
        let targetSpace = null;
        for (const space of targetColumn) {
            if (space.token === null) {
                targetSpace = space;
            }
        }
        if (targetSpace !== null) {
            this.ready = false;
            activeToken.drop(targetSpace, () => {
                this.updateGameState(activeToken, targetSpace)
            });
        }
    }
    gameOver(message) {
        const gameOver = document.getElementById('game-over')
        gameOver.style.display = "block";
        gameOver.textContent = message
    }
    updateGameState(token, target) {
        target.mark(token);
        if (!this.checkForWin(target)) {
            //Switching active players
            this.switchPlayer();
            if (this.activePlayer.checkToken()) {
                this.activePlayer.activeToken.drawHTMLToken();
                this.ready = true;
            } else {
                this.gameOver("No more tokens")
            }
        } else {
            this.gameOver(`${target.owner.name} wins`)
        }
    }
    switchPlayer() {
        for (let player of this.players) {
            if (player.active) {
                player.active = false
            } else {
                player.active = true
            }
        }
    }
    checkForWin(target) {
        console.log(target)
        let win = false;
        let owner = target.token.owner;
        //Vertical
        for (let x = 0; x < this.board.columns; x++) {
            for (let y = 0; y < this.board.rows - 3; y++) {
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x][y + 1].owner === owner &&
                    this.board.spaces[x][y + 2].owner === owner &&
                    this.board.spaces[x][y + 3].owner === owner) {
                    win = true
                }
            }
        }
        //Horizontal
        for (let x = 0; x < this.board.columns - 3; x++) {
            for (let y = 0; y < this.board.rows; y++) {
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x + 1][y].owner === owner &&
                    this.board.spaces[x + 2][y].owner === owner &&
                    this.board.spaces[x + 3][y].owner === owner) {
                    win = true
                }
            }
        }
        //Diagonal. Left top to right bottom
        for (let x = 0; x < this.board.columns; x++) {
            for (let y = 0; y < this.board.rows; y++) {
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x + 1][y - 1].owner === owner &&
                    this.board.spaces[x + 2][y - 2].owner === owner &&
                    this.board.spaces[x + 3][y - 3].owner === owner) {
                    win = true
                }
            }
        }
        //Diagonal. Left bottom to right top
        for (let x = 3; x < this.board.columns; x++) {
            for (let y = 0; y < this.board.rows - 3; y++) {
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x - 1][y + 1].owner === owner &&
                    this.board.spaces[x - 2][y + 2].owner === owner &&
                    this.board.spaces[x - 3][y + 3].owner === owner) {
                    win = true
                }
            }
        }

        return win;

    }
}