let xhr = new XMLHttpRequest();
var comment =  xhr.open("GET", "https://gorest.co.in/public/v1/comments");
var post = xhr.open("GET", "https://gorest.co.in/public/v1/posts");


function question4() {
    document.getElementById("comments").innerHTML = xhr.responseText;
    xhr.send();
}
