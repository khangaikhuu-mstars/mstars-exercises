let xhr1 = new XMLHttpRequest;
let xhr2 = new XMLHttpRequest;
xhr1.onreadystatechange = function(){
    if(xhr1.status === 200){
      document.getElementById('ajax').innerHTML += xhr1.responseText
  }
}
xhr2.onload = function(){
   document.getElementById('random').innerHTML += xhr2.responseText
}

xhr1.open('get', 'sidebar.html');
xhr1.send();
xhr2.open('get', 'sidebar.html');
xhr2.send();