//1. Create new XMLHttpRequest
var xhr = ew XMLHttpRequest();

//2. Create a call back function
xhr.onload = function () {
    console.log(xhr.status);
    console.log(xhr.responseText);
    document.getElementById('ajax').innerHTML = xhr.responseText;
}

//3. Open a request
xhr.open('GET', 'partial.html');

//4. Send a request
xhr.send();