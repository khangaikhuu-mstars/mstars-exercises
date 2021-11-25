const surpriseSection = document.getElementById('surprise');

function showSurprise() {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}
//built in function to call the showSurprise
// setTimeout(showSurprise(), 1000)


// Delay to setTimeout function to the call between 0 and 4 seconds

var timer = Math.random() * 4000;
setTimeout(showSurprise, 1000)
// Calling showSurprise function in setTimeout function, setTiemout callback, arrow function

setTimeout(showSurprise, timer);
// calling arrow function
setTimeout(() => {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}, timer);
// calling anonymous function
setTimeout(function () {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}, timer);