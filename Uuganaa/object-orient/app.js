const games = new Game()
document.getElementById('begin-game').addEventListener('click', () => {
    games.startGame()
    document.getElementById('begin-game').style.display = 'none'
    document.getElementById('play-area').style.opacity = '1'
})
document.addEventListener("keydown", function (event) {
    console.log(event.key);
    games.handleKeyDown(event)
})