// Creating XHR object
let xhr = new XMLHttpRequest()
//Creating li to ul
var ul = document.getElementById("list")

// Creating callback function
xhr.onreadystatechange = function () {
    console.log(xhr.readyState)
    if(xhr.readyState == 1){
        document.getElementById("ajax").innerHTML += `<li>Server connection established</li>`
    }else if(xhr.readyState == 2){
        document.getElementById("ajax").innerHTML += `<li>Request received</li>`
    }else if(xhr.readyState == 3){
        document.getElementById("ajax").innerHTML += `<li>Processing request</li>`
    }else if(xhr.readyState == 4){
        document.getElementById("ajax").innerHTML += `<li>Request is finished and response is finished</li>`
    }
}

//Creating get method 

xhr.open("GET", "sidebar.html")

//Sending request

xhr.send()