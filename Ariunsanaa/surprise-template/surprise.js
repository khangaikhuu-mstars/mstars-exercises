const surpriseSection = document.getElementById('surprise');

function showSurprise() {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}
// call the showSurprise() function after 1 second
// setTimeout( showSurprise, 1000)

// call the showSurprise() function after between 0 and 4 seconds
// var timer = Math.random () * 4000;
//     setTimeout(Math.random, timer)

// use anonymous function
// setTimeout(function(){
//     surpriseSection.textContent = '🎉 Surprise! 🎉';
// } Math.random () * 4000);

// use arrow function
// setTimeout(() => {
//     surpriseSection.textContent = '🎉 Surprise! 🎉';
// }, 5000);
