var xhttp = new XMLHttpRequest();
var hide = document.getElementById("load")

xhttp.onload = function () {
    console.log(xhttp.responseText)
    document.getElementById('ajax').innerHTML = xhttp.responseText
}
xhttp.open("GET", "sidebar.html")

function sendAjax() {
    xhttp.send()

}
hide.addEventListener("click", () => {
    hide.style.display = "none"
})