var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function (){
    console.log(xhr.status);
    console.log(xhr.responseText);
    document.getElementById("index").innerHTML = xhr.responseText;

xhr.open('GET', 'sidebar.html');

xhr.send();