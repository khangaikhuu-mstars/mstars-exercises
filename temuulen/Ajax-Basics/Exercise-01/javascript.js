let xhr = new XMLHttpRequest();
xhr.onload = function() {
    document.getElementById("ajax").innerHTML = xhr.responseText
    console.log(xhr.responseText)
}
xhr.open("GET","sidebar.html");
function sendAJAX() {
    xhr.send();
    document.getElementById("load").style.display = "none"
}

