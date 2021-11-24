var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(this.readyState == 1){
        document.getElementById("ajax").innerHTML = '<li>Server Connection Established</li>'
    } else if (this.readyState == 2){
        document.getElementById("ajax").innerHTML = '<li>Request Recieved</li>'
    } else if (this.readyState == 3){
        document.getElementById("ajax").innerHTML = '<li>Processing Request</li>'
    } else if (this.readyState == 4){
        document.getElementById("ajax").innerHTML = '<li>Request is Finished and Response is Finished</li>'
    }
}

xhr.open('GET', 'sidebar.html');
xhr.send();

