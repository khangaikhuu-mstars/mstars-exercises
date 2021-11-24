var xhr = new XMLHttpRequest;
xhr.onreadystatechange = function () {
    console.log(xhr.status);
    console.log(xhr.readyState, "The Request Is Ok");
    console.log(xhr.responseText);
    document.getElementById("ajax").innerHTML = xhr.responseText
}
xhr.open("GET", "sidebar.html");
xhr.send();