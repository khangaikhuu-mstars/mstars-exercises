const surpriseSection = document.getElementById('surprise');

function showSurprise() {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}
// setTimeout(showSurprise , 2000 ) //1 deh daalgavar


// var random =  Math.floor(Math.random() * 4000 )   //2 dahi daalgavar , random hugatsaa
// setTimeout(showSurprise , random )



var random =  Math.floor(Math.random() * 4000 ) 
// setTimeout(showSurprise , random )

// setTimeout( () =>{ surpriseSection.textContent = '🎉 Surprise! 🎉'; } , random )  //3 dahi daalgavar bol arrow function




var anonymus = function() {
    surpriseSection.textContent = '🎉 Surprise! 🎉'; // ene bol anonymus function ym
}
setTimeout(anonymus , random)