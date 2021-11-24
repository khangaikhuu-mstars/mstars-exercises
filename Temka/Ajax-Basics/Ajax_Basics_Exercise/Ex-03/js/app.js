

let xhr1 = new XMLHttpRequest()

xhr1.onreadystatechange = function(){
    if(xhr1.status == 200){
        document.getElementById("ajax").innerHTML = xhr1.responseText
    }
}

let xhr2 = new XMLHttpRequest()

xhr2.onload = function(){
    if (xhr2.status == 200){
        console.log(xhr2.responseText)
        document.getElementById("random").innerHTML = xhr2.responseText
    }
}

xhr1.open("GET", "sidebar.html")

document.getElementById("button1").addEventListener("click",()=>{

    xhr1.open("GET", "sidebar.html")
    xhr1.send()
    document.getElementById("button1").style.display = "none";
})

xhr2.open("GET", "randomText.txt")

document.getElementById("button2").addEventListener("click",()=>{

    if(document.getElementById("random").style.display == "none"){
        xhr2.open("GET", "randomText.txt")
        xhr2.send()
    }else {
        document.getElementById("random").style.display = "none";
    }
})
