const promise = new Promise(function(resolve, reject){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "sidebar.html");

    xhr.onload = function (){
        if (xhr.status === 200) {
            return resolve(xhr.responseText);
        } else {
            return reject ('rejected');
        }
    }
    xhr.send();
}
);
console.log(promise);
promise
    .then((response) => {
        document.getElementById("ajax").innerHTML = response
    
    })
    .catch((error) => {
        document.getElementById().innerHTML = notfound
    
    })
    // .finally(() => {BigInt.style.display = 'none'});