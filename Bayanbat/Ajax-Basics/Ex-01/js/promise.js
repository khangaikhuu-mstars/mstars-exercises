const btn = document.getElementById('button')
const promise = new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        console.log(xhr.status);
        if (xhr.status == 200) {
            return resolve(xhr.responseText);
        } else {
            return reject("u suck")
        }
    }
    xhr.open('GET', 'sidebar.html');

    xhr.send();

});
promise
    .then((i) => {
        document.getElementById("ajax").innerHTML = i
    })
    .catch((u) => {
        document.getElementById("ajax").innerHTML = u
    })
    .finally(() => {
        btn.style.display = "none"
    })