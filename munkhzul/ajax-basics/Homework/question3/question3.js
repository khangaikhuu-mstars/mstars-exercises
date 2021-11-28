let xhr = new XMLHttpRequest();
xhr.open("GET", "https://gorest.co.in/public/v1/posts");

function question3() {
    let li = document.createElement("li");
    let post = document.getElementById("posts");
    li.appendChild(document.createTextNode(xhr.responseText));
    post.appendChild(li);
    xhr.send();
}
