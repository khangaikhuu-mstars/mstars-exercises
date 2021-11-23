



// let sidebarContent = window.location.href = "/sidebar.html"

// let index = document.querySelector("#ajax")


// document.querySelector("button").addEventListener("onclick",function(){
//     index.innerHTML = sidebarContent;
// })

// // index.innerHTML = sidebarContent


//1. Create a new xmlhttprequest object
let xhttp = new XMLHttpRequest();

//2.call back function
xhttp.onload = function (){
    console.log(xhttp.status);

    console.log(xhttp.responseText)
    document.getElementById("ajax").innerHTML = xhttp.responseText;
}

//3. open the xmlhttprequest object with Request Method and Data
xhttp.open("GET","sidebar.html")

// 4. 

 function sendAJAX(){
    xhttp.send()
    document.getElementById("buttonID").style.display = 'none';

}






