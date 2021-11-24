
var bring = document.querySelector('#bring')
var haha
bring.addEventListener('click', ()=>{
    haha = document.querySelector('.button').style.display = 'none'
    sendAJAX()
})
let xhttp = new XMLHttpRequest()
xhttp.onload = function(){
    document.getElementById('ajax').innerHTML= xhttp.responseText
}
xhttp.open('GET',"sidebar.html")
function sendAJAX(){
    xhttp.send()
}