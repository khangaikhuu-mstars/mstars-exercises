// const xhttp = new XMLHttpRequest();
// xhttp.onload=function(){
//     //what do when the response is ready
// }
// XMLHttpRequest.onload=function(){
//     xhttp.onload
// }

// xhttp.open("GET", "test_ajax_info.txt")
// xhttp.send();
// console.log();
var xhr = new XMLHttpRequest();
xhr.open('get', 'sidebar.html');
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4){
    document.getElementById('ajax').innerHTML = xhr.responseText;
  }
};
function sendAJAX(){
  xhr.send();
  document.getElementById("load").style.display = "none"
}