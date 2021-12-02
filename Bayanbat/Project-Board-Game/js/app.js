const game = new Game();
console.log(game)

document.getElementById('begin-game').addEventListener('click', (e) => {
    console.log('but')
    game.startGame();
    e.target.style.display = "none";
    document.getElementById('play-area').style.opacity = '1';
})