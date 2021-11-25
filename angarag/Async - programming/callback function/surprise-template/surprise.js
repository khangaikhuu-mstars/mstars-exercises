//Task 1
// const surpriseSection = document.getElementById('surprise');

// function showSurprise() {
//     surpriseSection.textContent = '🎉 Surprise! 🎉';
// }

// setTimeout(showSurprise, 1000);


//Task 2
// const surpriseSection = document.getElementById('surprise');

// function showSurprise() {
//     surpriseSection.textContent = '🎉 Surprise! 🎉';
// }
// var timer = Math.random() * 4000
// setTimeout(showSurprise, timer);

//Task 3

// const surpriseSection = document.getElementById('surprise');

// var timer = Math.random() * 4000
// setTimeout(function (){
//     surpriseSection.textContent = '🎉 Surprise! 🎉';
// }, timer);

//Task 4 
const surpriseSection = document.getElementById('surprise');

var timer = Math.random() * 4000
setTimeout(() => {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}, timer);