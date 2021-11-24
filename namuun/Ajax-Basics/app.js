// create new XMLHttpRequest
var xhr = new XMLHttpRequest();

//Create a callback function

xhr.onload = function () {
    console.log(xhr.status);
    console.log(xhr.responseText);
    document.getElementById("ajax").innerHTML = xhr.responseText;
}

xhr.open('GET', 'partial.html');

xhr.send();