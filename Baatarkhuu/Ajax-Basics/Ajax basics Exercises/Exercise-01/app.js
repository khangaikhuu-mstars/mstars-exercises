let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    console.log(xhr.status);
    if(xhr.status === 200){
        console.log("The request is OK")
        document.getElementById("ajax").innerHTML = xhr.responseText
    }
}
xhr.open("Get","sidebar.html")
xhr.send()