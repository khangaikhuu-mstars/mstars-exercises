const game = new Game();

document.getElementById("begin-game").addEventListener('click', (event) => {
    game.startGame();
    event.target.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1'
})