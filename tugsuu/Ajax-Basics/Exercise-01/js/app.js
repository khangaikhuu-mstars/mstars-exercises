// var xhttp = new XMLHttpRequest();
// var hide = document.getElementById("button")

// xhttp.onload = function () {
//     console.log(xhttp.responseText)
//     document.getElementById('ajax').innerHTML = xhttp.responseText
// }
// xhttp.open("GET", "sidebar.html")

// function sendAjax() {
//     xhttp.send()

// }
// hide.addEventListener("click", () => {
//     hide.style.display = "none"
// })

var xhr = new XMLHttpRequest();
var hide = document.getElementById("button")

xhr.onreadystatechange = function () {
    console.log(xhr.status)
    if (xhr.status === 200) {
        console.log('"The Requist is OK"')
        document.getElementById("ajax").innerHTML = `${xhr.responseText}  STATUS:${xhr.status} , "The Requist is OK`
    }
}
xhr.open("GET", "sidebar.html")

function sendAjax() {
    xhr.send()
}
hide.addEventListener("click", () => {
    hide.style.display = "none"
})