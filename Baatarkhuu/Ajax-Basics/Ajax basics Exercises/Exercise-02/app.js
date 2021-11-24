let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if(xhr.readyState == 1){
        document.getElementById("ajax").innerHTML += `<li>Server Connection established</li> ` 
    }else if(xhr.readyState == 2){
        document.getElementById("ajax").innerHTML += `<li> Request recieved</li>`
    }else if(xhr.readyState == 3){
        document.getElementById("ajax").innerHTML += `<li> Processing request</li>`
    }else if(xhr.readyState == 4){
        document.getElementById("ajax").innerHTML += `<li>Request is finished and response is finished</li>`
    }
    console.log(xhr.readyState)
    
}
xhr.open("Get","sidebar.html")
xhr.send()