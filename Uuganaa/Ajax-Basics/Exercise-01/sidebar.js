var xhttp = new XMLHttpRequest();
xhttp.onload = function () {

    document.getElementById("ajax").innerHTML = xhttp.responseText
}
xhttp.open("GET", "sidebar.html");

function sendAJAX() {
    xhttp.send();
}
document.getElementsByClassName("button")[0].addEventListener("click", () => {
    document.querySelector(".button").style.display = 'none'
})