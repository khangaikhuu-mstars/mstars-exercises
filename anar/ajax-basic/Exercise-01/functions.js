
var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "/sidebar.html";

xhr.open(method, url, true);

xhr.onreadystatechange = function (){
  if(xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
    console.log('Request is ok');
  }
};


function ajaxCheckReq(){
  xhr.send();
}