const game = new Game()
console.log(game)

const btn = document.getElementById("begin-game")
btn.addEventListener("click", () => {
    game.startGame();
    btn.style.display = "none";
    document.getElementById('play-area').style.opacity = "1";
})