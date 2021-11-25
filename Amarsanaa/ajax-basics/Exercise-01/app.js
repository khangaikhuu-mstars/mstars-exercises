let xhttp = new XMLHttpRequest();
let responseTextDiv = document.getElementById("responseText");

xhttp.onload = function () {
  responseTextDiv.innerHTML = xhttp.responseText;
};

xhttp.open("GET", "./sidebar.html");

function sendAJAX() {
  xhttp.send();
  document.getElementById("load").style.display = "none";
}
