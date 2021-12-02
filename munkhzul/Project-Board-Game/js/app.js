const game = new Game();
console.log(game);

let btn = document.getElementById("begin-game");

btn.addEventListener("click", () => {
    game.startGame();
    document.getElementById("play-area").style.opacity = '1';
    btn.style.display = 'none';
});