//xml object with xhr name
let xhr = new XMLHttpRequest();

// create callback function
xhr.onreadystatechange = ()=> { 
    console.log(xhr.status)
    if (xhr.status === 200){
        console.log('reguest ok')
        document.getElementById("ajax").innerHTML = xhr.responseText;
    }
} 
// getting sidebar.html for response 
xhr.open("GET" , "sidebar.html");
xhr.send() 
