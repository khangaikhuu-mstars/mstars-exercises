var xhr = new XMLHttpRequest;
xhr.onreadystatechange = function () {
    if (xhr.readyState == 1) {
        console.log("<li>server connection established/li>");
        console.log(xhr.status)
        document.getElementById("ajax").innerHTML = "<li>server connection established</li>";
    }
    else if(xhr.readyState == 2) {
        console.log("request recieved")
        console.log(xhr.status)
        document.getElementById("ajax").innerHTML += "<li>request recieved</li>"
    }
    else if(xhr.readyState == 3) {
        console.log("processing recieved")
        console.log(xhr.status)
        document.getElementById("ajax").innerHTML += "<li>processing recieved</li>"
    }
    else if (xhr.readyState == 4) {
        console.log("request is finished and response is finished")
        console.log(xhr.status)
        document.getElementById("ajax").innerHTML += "<li>request is finished and response is finished</li>"
    }


}
xhr.open("GET", "sidebar.html");
xhr.send();