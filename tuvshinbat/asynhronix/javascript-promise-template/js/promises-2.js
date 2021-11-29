let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.status === 200){
        console.log("The request is ok")
        document.getElementById("ajax").innerHTML =xhr.responseText;
    }
}

xhr.open("GET", "sidebar.html")
xhr.send("ajax")
