// Create an XMLHttpRequest object 
let xhttp = new XMLHttpRequest();

// Define callback function
xhttp.onload = function(){
    console.log(xhttp.responseText)
    document.getElementById("ajax").innerHTML = xhttp.responseText
}

// Open a Request
xhttp.open("GET", "sidebar.html")

// Send a request to a server
function sendAjax(){
    xhttp.send();
}
document.getElementsByClassName("button")[0].addEventListener("click",()=>{
    document.querySelector(".button").style.display = 'none'
}) 
