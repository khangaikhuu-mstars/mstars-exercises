


// Create XMLHttpRequest object 

let xhr  = new XMLHttpRequest()

// Create callback function
xhr.onreadystatechange = function (){
    if(xhr.status == 200){
        console.log("The request is OK")
        document.getElementById("ajax").innerHTML = xhr.responseText
    }
}

// opent xhr reques with the GET
xhr.open("GET", "sidebar.html")

// send request 
xhr.send()
