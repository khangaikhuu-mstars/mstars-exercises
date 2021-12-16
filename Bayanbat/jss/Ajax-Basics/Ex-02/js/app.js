
var xhr = new XMLHttpRequest();
var ul = document.getElementById('list')
xhr.onreadystatechange = function (){
    if (xhr.readyState == 1){
        document.getElementById('ajax').innerHTML += `<li>server connection established</li>`
    }
    else if (xhr.readyState == 2){
        document.getElementById('ajax').innerHTML += `<li>request received</li>`
    }
    else if (xhr.readyState == 3){
        document.getElementById('ajax').innerHTML += `<li>processing request</li>`
    }
    else if (xhr.readyState == 4){
        document.getElementById('ajax').innerHTML += `<li>request is finished and response is finished</li>`
    }
    console.log(xhr.readyState)
}
xhr.open('GET', 'sidebar.html');

xhr.send();