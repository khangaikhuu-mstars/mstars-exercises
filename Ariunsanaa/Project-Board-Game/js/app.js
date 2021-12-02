const game = new Game();
console.log(game);

document.getElementById('begin-game').addEventListener('click', () => {
    game.startGame();
    
    document.getElementById('play-area').style.opacity = '1';
} )

