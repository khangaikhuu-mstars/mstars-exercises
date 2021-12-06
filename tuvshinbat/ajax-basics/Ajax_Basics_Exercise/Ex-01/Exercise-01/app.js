// bodlog 1
var xhr = new XMLHttpRequest;
var xhrResult = '';
xhr.onload = function () {
    if (xhr.status === 200) {
        console.log("the Request is ok");
        document.getElementById("ajax").innerHTML += `  the    Request   is ok`;
        const response = xhr.responseText;
        xhrResult = response;


    } else{
        console.log("responses wrong !!!")
    }

}
xhr.open("GET", "sidebar.html");
xhr.send();
