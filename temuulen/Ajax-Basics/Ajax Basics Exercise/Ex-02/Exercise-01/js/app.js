var xhr = new XMLHttpRequest();
var ul = getElementById('ajax');
var li = documnet.createElement('li');
li.appendChild(document.createTextNode("Four"));
ul.appendChild(li);

xhr.onreadystatechange = function () {
    if( xhr.readyState === 1 ){
        document.getElementById('ajax').innerHTML = `<li>Server connection established</li>`
    } else if( xhr.readyState === 2 ){
        document.getElementById('ajax').innerHTML = `<li>Request received</li>`
    } else if( xhr.readyState === 3 ){
        document.getElementById('ajax').innerHTML = `<li>Processing request</li>`
    } else if( xhr.readyState === 4 ){
        document.getElementById('ajax').innerHTML = `<li>Request is finished and response is finished</li>`
    }
    console.log(xhr.readyState)
}

xhr.open('GET', 'sidebar.html');

xhr.send();