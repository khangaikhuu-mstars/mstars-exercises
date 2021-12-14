var xhr1 = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();

xhr1.onreadystatechange = function (){
    console.log(xhr1.status);
    if (xhr1.status = 200){
        console.log(xhr1.responseText);
        document.getElementById("ajax").innerHTML = xhr1.responseText
    }
}
xhr2.onload = function (){
    console.log(xhr2.status);
    if (xhr2.status = 200){
        console.log(xhr2.responseText);
        document.getElementById("random").innerHTML = xhr2.responseText
    }
}
xhr1.open('GET', 'sidebar.html');
xhr1.send();
xhr2.open('GET', 'randomText.txt');
xhr2.send();