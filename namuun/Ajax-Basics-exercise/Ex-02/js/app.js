var xhr = new XMLHttpRequest();
var msg = "";

xhr.onreadystatechange = function(){
    var ul = document.getElementById("ajax"); 
    var li = document.createElement("li");
    if( xhr.readyState == 1){
        msg = "Server Connection Established";
    } else if ( xhr.readyState == 2){
        msg = "Request Recieved"
    } else if (xhr.readyState == 3){
        msg = "Processing Request"
    } else if (xhr.readyState == 4){
        msg = "Request is Finished and Response is Finished"
    }
    li.appendChild(document.createTextNode(msg)); 
    ul.appendChild(li);

}

xhr.open('GET', 'sidebar.html');
xhr.send();

