const game = new Game();



document.getElementById("begin-game").addEventListener('click', () => {

    game.startGame();

    
    document.getElementById('play-area').style.opacity = '1';
    
    document.getElementById("begin-game").style.display = 'none';
})