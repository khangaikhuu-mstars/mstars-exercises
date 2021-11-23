// let click = document.getElementsByClassName("button")
// click.addEventlistener('click',()=>{
 

// })


let xhttp = new XMLHttpRequest();
xhttp.onload = function(){
    console.log(xhttp.responseText)
    document.getElementById("ajax").innerHTML = xhttp.responseText
}
xhttp.open("GET", "sidebar.html")

function sendAjax(){
    xhttp.send();
}
document.getElementsByClassName("button")[0].addEventListener("click",()=>{
    document.querySelector(".button").style.display = 'none'
}) 
