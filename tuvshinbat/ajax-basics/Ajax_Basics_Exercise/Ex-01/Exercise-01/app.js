// bodlog 1
var xhr = new XMLHttpRequest;
xhr.onload = function () {
    if (xhr.status === 200) {
        console.log("the Request is ok");
        document.getElementById("ajax").innerHTML = "the Request is ok";

    }

}
xhr.open("GET", "sidebar.html");
xhr.send();

//bodlog 2