//great new XMLHhttp requist
var xhr = new XMLHttpRequest

// 2 great a callback function

xhr.onload = function(){
    console.log(xhr.status);
    console.log(xhr.responseText)
    document.getElementById('ajax').innerHTML = xhr.responseText
}

// 3. open a request

xhr.open('get', 'partial.html',);

// 4. send a request
xhr.send();