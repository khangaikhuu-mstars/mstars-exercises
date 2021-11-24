// Creating XmlHttpRequest
var xhr = new XMLHttpRequest()

//Creating callback
xhr.onreadystatechange = function (){
    document.getElementById("ajax").innerHTML = xhr.responseText
    console.log(xhr.status)
}

//Getting aside.html
xhr.open("GET", "aside.html")

//Sending request
xhr.send()
