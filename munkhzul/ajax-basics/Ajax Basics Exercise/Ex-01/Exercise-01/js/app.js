
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.status === 200) {
        console.log('Request ok');
        document.getElementById("ajax").innerHTML = xhr.responseText;
    }
}

xhr.open("GET", "sidebar.html");

function sendAJAX() {
    xhr.send();
}
