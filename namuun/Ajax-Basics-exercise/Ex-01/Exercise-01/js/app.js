var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    console.log(xhr.status)
    if(xhr.status == 200){
        console.log("The Request is OK.");
        document.getElementById("ajax").innerHTML = xhr.responseText;
    }
}

xhr.open('GET', 'sidebar.html');
xhr.send()


