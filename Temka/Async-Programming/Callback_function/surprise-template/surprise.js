




const surpriseSection = document.getElementById('surprise');

// function showSurprise() {
//     surpriseSection.textContent = '🎉 Surprise! 🎉';
// }


// let showSurprise = function(){
//     surpriseSection.textContent = '🎉 Surprise! 🎉';
// }

let showSurprise =()=> {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}



var timer  = Math.random() * 4000

setTimeout(showSurprise,timer)
