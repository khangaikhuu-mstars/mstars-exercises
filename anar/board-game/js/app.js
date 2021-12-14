const game = new Game();
console.log(game);

const btn = document.getElementById('begin-game');

btn.addEventListener('click', event => {
    game.startGame();
    document.getElementById('play-area').style.opacity = '1';
    event.target.style.display = 'none';
})

