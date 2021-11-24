var xhr = new XMLHttpRequest

xhr.onreadystatechange = function () {
 if(xhr.readyState === 1){
     document.getElementById('ajax').innerHTML += `<li>Server connection established</li>`
 }else if (xhr.readyState === 2) {
    document.getElementById('ajax').innerHTML += `<li>request recieved</li>`
 }else if (xhr.readyState === 3) {
    document.getElementById('ajax').innerHTML += `<li>processing request</li>`
 }else if (xhr.readyState === 4) {
    document.getElementById('ajax').innerHTML += `<li>request finished and response is finished</li>`
 }
}

xhr.open('get', 'sidebar.html');
xhr.send(); 
 var ul = document.getElementById('list');
 var li = document.getElementById('li');
li.appendChild(document.createTextNode('four'));
