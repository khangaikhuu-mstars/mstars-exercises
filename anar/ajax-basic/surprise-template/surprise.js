const surpriseSection = document.getElementById('surprise');

function showSurprise() {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}


let randomDelay = Math.floor(Math.random() * 4000);


//  Fixed delay


//     setTimeout(showSurprise, 2000);


//  Random delayed anonymus function

const x = function () {
    setTimeout(() => {
        surpriseSection.textContent = '🎉 Surprise! 🎉',
        randomDelay
    });    
}


//  Random delay - Arrow Function

setTimeout(() => {
    surpriseSection.textContent = '🎉 Surprise! 🎉',
    randomDelay
});


//  Auto refresh

//     setInterval(showSurprise, 1000);