var xhr1 = new XMLHttpRequest();
xhr1.onreadystatechange = function(){
    console.log(xhr1.status)
    if(xhr1.status == 200){
        document.getElementById("ajax").innerHTML = xhr1.responseText
    }
}

var xhr2 = new XMLHttpRequest();
xhr2.onload = function(){
    console.log(xhr2.status)
    document.getElementById("random").innerHTML = xhr2.responseText
}

xhr1.open('GET', 'sidebar.html');
xhr1.send();
xhr2.open('GET', 'randomText.txt');
xhr2.send();