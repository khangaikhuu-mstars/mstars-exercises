const game = new Game();

document.getElementById("begin-game").addEventListener('click', () => {
    game.startGame();

    document.getElementById('play-area').style.opacity = '1';
    document.getElementById("begin-game").style.display = 'none';
})

// // class Game {
// //     constructor(){

// //     }
//     handleKeyDown(keydown) {
//         document.addEventListener('keydown', function(event) {
//             console.log(event.key);
//         })
//     }
// // }


document.addEventListener('keydown', function(event) {
                console.log(event.key);
                game.handleKeyDown(event);
            })

document.addEventListener('keyright', function(event) {
                console.log(event.key);
            })

document.addEventListener('keyleft', function(event) {
                console.log(event.key);
            })
