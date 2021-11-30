const test = new Promise(function (resolve, reject) {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        if (xhttp.status === 0) {
            return resolve(xhttp.responseText)
        } else {
            return reject("error")
        }
    }
    xhttp.open("GET", "sidebar.html");
    xhttp.send();
    document.getElementsByClassName("button")[0].addEventListener("click", () => {
        document.querySelector(".button").style.display = 'none'
    })
})
test.then((data) => {
        document.getElementById("ajax").innerHTML += data
        console.log(data)
    })
    .catch((error) => {
        document.getElementById("ajax").innerHTML = error
    })