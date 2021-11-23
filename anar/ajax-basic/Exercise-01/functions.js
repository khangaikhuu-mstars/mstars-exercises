let xhr = new XMLHttpRequest();

xhr.onload = function() {
    console.log(xhr.responseText);
    document.getElementById('ajax').innerHTML = xhr.responseText;
    document.getElementById('load').style.display = 'none';
}
xhr.open("GET", "sidebar.html");

function sendAJAX(){
    xhr.send();
}
