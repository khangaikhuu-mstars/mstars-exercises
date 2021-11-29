let xhr = new XMLHttpRequest();
xhr.open("GET", "https://gorest.co.in/public/v1/users");


function question2() {
    document.getElementById("users").innerHTML = xhr.responseText;
    xhr.send();
}
