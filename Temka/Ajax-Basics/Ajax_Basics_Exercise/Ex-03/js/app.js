

let xhr1 = new XMLHttpRequest()

xhr1.onreadystatechange = function(){
    if(xhr1.status == 200){
        document.getElementById("ajax").innerHTML = xhr1.responseText
    }
}

let xhr2 = new XMLHttpRequest()

xhr2.onload = function(){
    if (xhr2.status == 200){
        document.getElementById("random").innerHTML = xhr2.responseText
    }
}

xhr1.open("GET", "sidebar.html")
xhr1.send()

xhr2.open("GET", "randomText.txt")
xhr2.send()