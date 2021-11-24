//1. creat new XMLHttprequest

var xhr = new XMLHttpRequest

//2. creata a callback function
xhr.onload = function(){
console.log(xhr.status);
console.log(xhr.responseText);
document.getElementById("ajax").innerHTML = xhr.responseText;

}

//3. open a request
xhr.open('GET', 'partial.html');


//4. send a request

xhr.send();