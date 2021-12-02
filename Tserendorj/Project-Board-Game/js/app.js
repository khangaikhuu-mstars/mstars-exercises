const game = new Game();
let btn = document.getElementById("begin-game")
btn.addEventListener('click',()=>{
     game.startGame();
     btn.style.display = 'none';
     document.getElementById('play-area').style.opacity = '1';
});