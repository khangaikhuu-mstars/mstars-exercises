var xhr = new XMLHttpRequest
xhr.onreadystatechange = function () {
    console.log(xhr.status)
    console.log(xhr.readyState)
    if (xhr.readyState == 1) {
        console.log("This is Ready State-1")
        document.getElementById("ajax").innerHTML = "<li>Server connection established</li>"
    } else if (xhr.readyState == 2) {
        console.log("This is Ready State-2")
        document.getElementById("ajax").innerHTML += "<li>Request established</li>"
    } else if (xhr.readyState == 3) {
        console.log("This is Ready State-3")
        document.getElementById("ajax").innerHTML += "<li>Processing request</li>"
    } else if (xhr.readyState == 4) {
        console.log("This is Ready State-4")
        document.getElementById("ajax").innerHTML += "<li>request is finished and response is finished</li>"

    }

}
xhr.open("GET", "sidebar.html");
xhr.send();