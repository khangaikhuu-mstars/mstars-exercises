var xhr = new XMLHttpRequest

xhr.onreadystatechange = function () {
    if(xhr.status === 200){
        console.log('The Request is ok');
        document.getElementById('ajax').innerHTML = xhr.responseText;
    }
}
xhr.open('get', 'sidebar.html');
xhr.send(); 
