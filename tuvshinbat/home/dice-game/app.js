// shoo haydag togloom hayj toglono

//1.toglgchiin eeljiig hadgalah
var activePlayer = 0;

// 2.var scores = [0, 0]
var scores = [0, 0];

// 3.toglgchiin eeljind tsugluulj baigaa onoog hadgalna

var roundScore = 0;

// 4.shoonii ali talaaraa buusaniig hadgalah bogood.1-6 hurtel sanamsargui too uusgen



document.getElementById("score-0").textContent = 0;

document.getElementById("score-1").innerHTML = 0;



document.querySelector('.dice').style.display ="none";
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
document.querySelector(".btn-roll").addEventListener("click",function (){
    // alert("shoo buulaa" + diceNumber)
    var diceNumber =Math.floor(Math.random() * 6) +1;
    // btn-roll click hiigdeh uyd display block bolj haragdana
    document.querySelector(".dice").style.display="block"
    
    

document.querySelector('.dice').src="dice-" + diceNumber + ".png";



// toglogchiin eeljiin onoog oorchilnoo

if(diceNumber !== 1){
// 1 ees ylgaatai too buulaa
roundScore = roundScore + diceNumber
document.getElementById("current-" + activePlayer).textContent = roundScore;
console.log(roundScore)
}else{
    switchToNextPlayer()

    
}


});
  // za odoo hold button iig darhad current onoog player point ruu shiljuulne
  
 document.querySelector(".btn-hold").addEventListener("click",function( ) {
// ug toglogchiin tsugluulssan onoog btn.hold tovchiig darhad global onoo ni deer nemeed

// if(activePlayer === 0){
//     scores[0] = scores[0] + roundScore ;
// }else {
//     scores[1] = scores[1] + roundScore ;

// }

scores[activePlayer] = scores[activePlayer] + roundScore;

document.getElementById("score-" + activePlayer).textContent= scores[activePlayer]

// tuhain eeljiin onoog ni 0 bolgon

   switchToNextPlayer()

// za mon toglogchiin erhiig shiljuulne


// toglogch 100 onoo hurhed hojih tul hojson esehiig shal
if(scores[activePlayer] >= 10){
    document.getElementById("name-"+ activePlayer).textContent = "Winner !!!";
    document.querySelector(".player-"+ activePlayer + "-panel")
    .classList.add("winner")
    document.querySelector(".player-"+ activePlayer + "-panel")
    .classList.remove("active")

}else {
    // toglogchiin eeljiig solino
    switchToNextPlayer()

}
});
function switchToNextPlayer(){
    roundScore = 0;
    document.getElementById("current-"+ activePlayer)
    
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
   
    // ulaan tsegiig shiljuulne
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    // onoo 1 bolood shiljih uyd shoog tahiad tur alga bolgoy
    document.querySelector(".dice").style.display = "none";
   
       
    

};
document.querySelector(".btn-new").addEventListener("click",initGame)
function initGame(){ 
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").innerHTML = 0;
    document.querySelector('.dice').style.display ="none";
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;

    document.getElementById("name-0").textContent = "player-1"
    document.getElementById("name-1").textContent = "player-1"
    document.querySelector(".player-0-panel").classList.remove("winner")
    document.querySelector(".player-1-panel").classList.remove("winner")
    document.querySelector(".player-0-panel").classList.remove("active")
    document.querySelector(".player-1-panel").classList.remove("active")

    document.querySelector(".player-0-panel").classList.add("active")

}




    
