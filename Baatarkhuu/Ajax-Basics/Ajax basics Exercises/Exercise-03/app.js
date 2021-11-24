// let xhr = new XMLHttpRequest();
let xhr1 = new XMLHttpRequest();
xhr1.onreadystatechange = function() {
    console.log(xhr1.status);
    if(xhr1.status === 200){
        console.log("The request is OK")
        document.getElementById("ajax").innerHTML = xhr1.responseText
    }
}
let xhr2 = new XMLHttpRequest();
xhr2.onload = function(){
    console.log(xhr2.status)
    if(xhr2.status == 200){
        console.log("xhr2 Ok")
        document.getElementById('random').innerHTML = xhr2.responseText
    }

}
xhr1.open("Get","sidebar.html")
xhr1.send()
xhr2.open("GET","randomText.txt")
xhr2.send();
