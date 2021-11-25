const surpriseSection = document.getElementById('surprise');

function showSurprise() {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}
// setTimeout(showSurprise, 2000);

let delay = Math.floor(Math.random() * 4000); //random second 
// setTimeout(showSurprise, delay);

//Using Arrow Function
/*setTimeout(() => {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}, delay)
*/


//Using Anonymous function
var time = function () {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
};
setTimeout(time, delay)