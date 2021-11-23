let xhttp = new XMLHttpRequest();

xhttp.onload = function(){
    console.log(xhttp.responseText)
    document.getElementById('ajax').innerHTML = xhttp.responseText
}
xhttp.open("GET" , "sidebar.html");

function sendAJAX()  {
    xhttp.send();
}
document.getElementById("load").addEventListener('click', ()=> {
    document.getElementById("load").style.display = 'none'
})

