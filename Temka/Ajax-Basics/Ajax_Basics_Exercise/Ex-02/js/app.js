


// Create XMLHttpRequest object 

let xhr  = new XMLHttpRequest()

// Create callback function
xhr.onreadystatechange = function (){
    if (xhr.readyState == 1 ){
        console.log('this is ready state 1')
        document.getElementById("ajax").innerHTML += "<li>server connection establishe</li>" 
    }else if(xhr.readyState == 2){
        console.log('this is ready state 2')
        document.getElementById("ajax").innerHTML += "<li>request received</li>"
    }else if(xhr.readyState == 3){
        console.log('this is ready state 2')
        document.getElementById("ajax").innerHTML += "<li>processing request</li>"
    }else if(xhr.readyState == 4){
        console.log('this is ready state 2')
        document.getElementById("ajax").innerHTML += "<li>request is finished and response is finisehd</li>"
    }

}

// opent xhr reques with the GET
xhr.open("GET", "sidebar.html")

// send request 
xhr.send()
