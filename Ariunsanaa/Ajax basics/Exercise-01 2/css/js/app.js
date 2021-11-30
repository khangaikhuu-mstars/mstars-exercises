const myPromise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "sidebar.html");

    xhr.onreadystatechange = function(){
     if (xhr.status == 200){
         document.getElementById("ajax").innerHTML = xhr.responseText;
         return resolve();
     } else {
         return reject ("rejected");
     }
    };
    
    xhr.send();

});

console.log(myPromise);

