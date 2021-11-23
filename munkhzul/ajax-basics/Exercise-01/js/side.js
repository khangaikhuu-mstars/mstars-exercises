//Ajax ashiglaad serverees client ruu tataj avah
let xhttp = new XMLHttpRequest();
let hide = document.getElementById("hide");

xhttp.onload = function() {
    console.log(xhttp.responseText);
    document.getElementById("ajax").innerHTML = xhttp.responseText;
}

xhttp.open("GET", "sidebar.html");

function sendAJAX() {
    xhttp.send();
}
hide.addEventListener("click", () => {
    hide.style.display = 'none';
})