let xhttp = new XMLHttpRequest();
xhttp.onload = function(){
    console.log(xhttp.responseText)
 document.getElementById("ajax").innerHTML = xhttp.responseText
}   

xhttp.open("GET", "sidebar.html");
xhttp.send();

function sendAJAX() {
    xhr.send();
}



    




