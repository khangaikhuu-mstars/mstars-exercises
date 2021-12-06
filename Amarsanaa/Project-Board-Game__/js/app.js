const game = new Game();
console.log(game);
document.getElementById("begin-game").addEventListener("click", () => {
  game.startGame();
  this.StyleSheet.display = "none";
  document.getElementById("play-area").style.opacity = "1";
  document.getElementById("begin-game").style.display = "none";
});

document.addEventListener("keydown");
