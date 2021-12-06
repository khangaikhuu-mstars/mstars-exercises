const game = new Game();

document.getElementById("begin-game").addEventListener('click', () =>{
    console.log('button clicked');
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});