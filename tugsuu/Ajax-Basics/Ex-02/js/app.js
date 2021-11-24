var xhr = new XMLHttpRequest();


xhr.onreadystatechange = function () {
    var ul = document.getElementById("ajax");
    var li = document.createElement("li");

    if (this.readyState == 1) {
        li.appendChild(document.createTextNode("server connection established"));
        ul.appendChild(li);
    }
    if (this.readyState == 2) {
        li.appendChild(document.createTextNode("request recieved"));
        ul.appendChild(li);
    }
    if (this.readyState == 3) {
        li.appendChild(document.createTextNode("processing request"));
        ul.appendChild(li);
    }
    if (this.readyState == 4) {
        li.appendChild(document.createTextNode("request is finished and response is finished"));
        ul.appendChild(li);
    }
}
xhr.open("GET", "sidebar.html")


    xhr.send()
