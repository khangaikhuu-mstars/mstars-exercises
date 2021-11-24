// Creating XHR object
let xhr = new XMLHttpRequest()

// Creating callback function
xhr.onreadystatechange = function () {
    console.log(xhr.status)
    if (xhr.status === 200) {
        console.log("The request is ok")
    }
    document.getElementById("ajax").innerHTML = xhr.responseText
}

//Creating get method 

xhr.open("GET", "sidebar.html")

//Sending request

xhr.send()