
var xhr = new XMLHttpRequest(),
method = "GET";
url = "/sidebar.html";
    
xhr.open(method, url);

const readyStateMessages = ['request not initialized', 'server connection established', 'request received', 'processing request', 'request is finished and response is finished'];

xhr.onreadystatechange = function(){
  for(let i = 0; i < 4; i++){
    if(xhr.readyState === i) {
      console.log(i);
      console.log(readyStateMessages[i]);
      console.log(readyStateMessages.length);
    }
  }
};
    

function ajaxCheckReq() {
  xhr.send();
}



// var ul = document.getElementById("list"); 

// var li = document.createElement("li");
// li.appendChild(document.createTextNode("Four")); 
// ul.appendChild(li);


