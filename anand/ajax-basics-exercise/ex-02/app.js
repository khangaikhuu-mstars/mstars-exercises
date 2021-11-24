

let xhr = new XMLHttpRequest()
xhr.onreadystatechange = function(){
    if (xhr.readyState==1){
        document.getElementById('ajax').innerHTML+= `<li>Server connection establish</li>`
    }
    else if(xhr.readyState==2){
        document.getElementById('ajax').innerHTML += `<li> Request recieved</li>`
    }
    else if(xhr.readyState==3){
        document.getElementById('ajax').innerHTML += `<li> Processing request</li>`
    }
    else if(xhr.readyState==4){
        document.getElementById('ajax').innerHTML += `<li> request is finished and response is finished</li>`
    }
   
    console.log(xhr.readyState)
}
xhr.open('GET',"sidebar.html")
xhr.send()
