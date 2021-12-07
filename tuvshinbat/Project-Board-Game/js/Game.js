class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }
    createPlayers() {
        const player1 = new Player("player1", 'id-1', '#e15258')
        const player2 = new Player("player2", "id-2", '#e59a13', true);
        return [player1, player2];

    }
    get activePlayer() {
        return this.players.find(player => player.active);

    }
startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }
    handKeyDown(event) {

        if (this.ready) {
            if (event.key == "ArrowRight") {
                this.activePlayer.activeToken.moveRight(this.board.columns);
            } else if (event.key == "ArrowLeft") {
                this.activePlayer.activeToken.moveLeft()
                console.log("Arrowleft")
            } else if (event.key == "ArrowDown") {
                this.playToken()
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
            activeToken.drop(targetSpace, () => {
                this.updateGameState(activeToken, targetSpace);
            });
        }
    }
    gameOver(message) {
        document.getElementById('game-over').style.display = `block`
        document.getElementById('game-over').textContent = message;
    }

    updateGameState(token, target) {
       target.mark(token);
        if (!this.checkForwin(target)) {
            this.switchPlayer();
            if (this.activePlayer.checkTokens()) {

                this.activePlayer.activeToken.drawHTMLToken();
                this.ready = true;
            } else {
                this.gameOver('no more tokens');
            }
        } else {
            this.gameOver(`${target.owner.name} wins`);
        }
    }
    switchPlayer() {
        for (let player of this.players) {
            player.active = player.active === true ? false : true;
        }
    }
    checkForwin(target) {
        let win = false;
        let owner = target.token.owner;
        // vertical
        for (let x = 0; x < this.board.columns; x++) {
            for (let y = 0; y < this.board.rows - 3; y++) {
                console.log(this.board.spaces[x][y].owner)
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x][y + 1].owner === owner &&
                    this.board.spaces[x][y + 2].owner === owner &&
                    this.board.spaces[x][y + 3].owner === owner) {
                    win = true;
                }
            }
        }
        // horizontal
        for (let x = 0; x < this.board.columns - 3; x++) {
            for (let y = 0; y < this.board.rows; y++) {
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x + 1][y].owner === owner &&
                    this.board.spaces[x + 2][y].owner === owner &&
                    this.board.spaces[x + 3][y].owner === owner) {
                    win = true;
                }
            }
        }
        // diagnol from left botton to rigth top
        for (let x = 0; x < this.board.columns; x++) {
            for (let y = 0; y < this.board.rows; y++) {
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x - 1][y - 1].owner === owner &&
                    this.board.spaces[x - 2][y - 2].owner === owner &&
                    this.board.spaces[x - 3][y - 3].owner === owner) {
                    win = true;
                }
            }
        }

        //
        for (let x = 3; x < this.board.columns; x++) {
            for (let y = 0; y < this.board.rows - 3; y++) {
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x - 1][y + 1].owner === owner &&
                    this.board.spaces[x - 2][y + 2].owner === owner &&
                    this.board.spaces[x - 3][y + 3].owner === owner) {
                    win = true;
                }
            }
        }
        return win;
    }
    





}