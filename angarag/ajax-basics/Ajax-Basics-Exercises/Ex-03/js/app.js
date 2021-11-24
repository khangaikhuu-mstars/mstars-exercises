// Creating XHR object
let xhr1 = new XMLHttpRequest()
let xhr2 = new XMLHttpRequest()

// Creating callback function
xhr1.onreadystatechange = function () {
 console.log(xhr1.status)
 if(xhr1.status == 200){
     document.getElementById("ajax").innerHTML = xhr1.responseText
 }
}
xhr2.onload = function (){
    console.log(xhr2.status)
    if(xhr2.status == 200){
        document.getElementById("random").innerHTML = xhr2.responseText
    }
}

//Creating get method 

xhr1.open("GET", "sidebar.html")
xhr2.open("GET", "randomText.txt")

//Sending request

xhr1.send()
xhr2.send()