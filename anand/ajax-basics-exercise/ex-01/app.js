

let xhr = new XMLHttpRequest()
xhr.onreadystatechange = function(){
    document.getElementById('ajax').innerHTML= xhr.responseText
    if(xhr.status=200){
        console.log("The request is ok")
    }
}
xhr.open('GET',"sidebar.html")
xhr.send()
