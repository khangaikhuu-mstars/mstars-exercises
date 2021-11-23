let xtml = new XMLHttpRequest();
let button = document.getElementsByClassName("button")[0]
xtml.onload = function () {
    console.log(xtml.responseText)
    button.innerHTML = xtml.responseText
    button.className = "response"
}
xtml.open("GET", "sidebar.html")
function sendAjax(){
    xtml.send()
}