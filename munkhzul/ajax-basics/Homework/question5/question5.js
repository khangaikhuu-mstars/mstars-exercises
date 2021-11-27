// let xhr = new XMLHttpRequest();


function user() {
    let xhr1 = new XMLHttpRequest();
    let users = document.getElementById("users");
    xhr1.open("GET", "https://gorest.co.in/public/v1/users");
    users.innerHTML = xhr1.responseText;
    xhr1.send();
}

function question5() {
    user();
}
