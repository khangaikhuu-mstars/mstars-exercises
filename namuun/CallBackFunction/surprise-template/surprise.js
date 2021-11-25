// main
const surpriseSection = document.getElementById('surprise');
// function showSurprise() {
//     surpriseSection.textContent = '🎉 Surprise! 🎉';
// }


// Task0
// setTimeout(showSurprise, 1000)


// Task1
// const randomNumber = Math.floor(Math.random()*4000)
// setTimeout(showSurprise, randomNumber)


// Task2
// setTimeout(function(){
//     surpriseSection.textContent = '🎉 Surprise! 🎉';
// }, 2000)


// Task3
setTimeout(() => {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}, 2000)