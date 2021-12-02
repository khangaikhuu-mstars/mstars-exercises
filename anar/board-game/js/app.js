const game = new Game();
const btn = document.getElementById('begin-game');

btn.addEventListener('click', () => {
    game.startGame();
    document.getElementById('play-area').style.opacity = '1';
    btn.style.display = 'none';
})

