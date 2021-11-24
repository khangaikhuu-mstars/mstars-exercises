
let xhr = new XMLHttpRequest();


xhr.onreadystatechange = function() {
    var ul = document.getElementById("ajax");
    var li = document.createElement("li");
    if (xhr.readyState == 1) {
        li.appendChild(document.createTextNode("server connection established"));
        ul.appendChild(li);
    }
    else if (xhr.readyState == 2) {
        li.appendChild(document.createTextNode("request recieved"));
        ul.appendChild(li);
    }
    else if (xhr.readyState == 3) {
        li.appendChild(document.createTextNode("processing request"));
        ul.appendChild(li);
    }
    else if (xhr.readyState == 4) {
        li.appendChild(document.createTextNode("request is finished and response is ready"));
        ul.appendChild(li);
    }
}

xhr.open("GET", "sidebar.html");
xhr.send();
