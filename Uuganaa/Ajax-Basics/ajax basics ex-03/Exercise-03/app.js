var xhr1 = new XMLHttpRequest
xhr1.onreadystatechange = function () {
    console.log(xhr1.status)
    console.log(xhr1.responseText)
    document.getElementById("ajax").innerHTML = xhr1.responseText
}
xhr1.open("GET", "sidebar.html")
xhr1.send();






var xhr2 = new XMLHttpRequest
xhr2.onload = function () {
    console.log(xhr2.status)
    document.getElementById("random").innerHTML = xhr2.status
    console.log(xhr2.responseText)
    document.getElementById("random").innerHTML = xhr2.responseText
}
xhr2.open("GET", "randomText.txt")
xhr2.send();