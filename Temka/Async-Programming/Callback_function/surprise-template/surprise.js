




const surpriseSection = document.getElementById('surprise');

function showSurprise() {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}

//setTimeout(showSurprise, 2000);

var timer  = Math.random() * 4000

// setTimeout(showSurprise,timer)


// setTimeout(function(){
//     surpriseSection.textContent = '🎉 Surprise! 🎉';
// } , timer)


setTimeout(()=>{
    surpriseSection.textContent = '🎉 Surprise! 🎉';
},timer)