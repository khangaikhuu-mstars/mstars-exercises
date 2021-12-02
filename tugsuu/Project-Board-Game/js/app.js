const game = new Game()

let btn = document.getElementById('begin-game')

document.getElementById("begin-game").addEventListener('click' , () =>{
   console.log('button clicked')
    game.startGame()
    document.getElementById('play-area').style.opacity = '1'
    btn.style.display = 'none'
})