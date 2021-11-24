//1. create new XML
var xhr = new XMLHttpRequest();

//2. create a callback function
xhr.onload = function() {
    console.log(xhr.status);
    console.log(xhr.responseText);
    document.getElementById("ajax").innerHTML = xhr.responseType
}

//3. open a request
xhr.open("GET", 'partial.html');
//send a request
xhr.send();