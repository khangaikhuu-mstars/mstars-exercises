// create new XMLHttpRequest
var xhr = new XMLHttpRequest();

// create call back function
xhr.onload = function () {
    console.log(xhr.status);
    console.log(xhr.responseText);
    document.getElementById("ajax").innerHTML = xhr.responseText
}

// open a request 
xhr.open('GET', 'partial.html');

//send request 
xhr.send();