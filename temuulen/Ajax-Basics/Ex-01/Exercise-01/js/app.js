// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if ( xhr.status === 200 ) {
//         console.log("The Request is OK");
//     }
//     document.getElementById("ajax").innerHTML = xhr.responseText;
// }

// xhr.open('GET', "sidebar.html");
// xhr.send();



const promise = new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'sidebar.html');
    xhr.onload = () => {
        if( xhr.status === 200) {
            return resolve(xhr.responseText);
        } else {
            return reject('Rejected');
        }
    }
    xhr.send()
});
console.log(promise);

promise.then((response) => {
    console.log(response);
    document.getElementById("ajax").innerHTML = response;
}).catch((error) => {
    console.log(error)
    document.getElementById("ajax").innerHTML = 'sidebar.html not found'
}).finally(() => {
    let btn = document.getElementById("button");
    btn.style.display = 'none';
})

