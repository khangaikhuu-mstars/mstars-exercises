const game = new Game();
const btn = document.getElementById('begin-game')
btn.addEventListener('click',()=>{
    console.log('button clicked')
    game.startGame();
    btn.style.display = 'none'
    document.getElementById('play-area').style.opacity = '1';

});

