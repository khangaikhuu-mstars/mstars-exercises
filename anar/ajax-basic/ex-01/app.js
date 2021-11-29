const btn = document.getElementById("button");
let ul = document.getElementById('show');

function request(){
    let xhr = new XMLHttpRequest();
    
    const promise = new Promise((resolve, reject) => {
        xhr.open('GET', 'test.html');
        xhr.onload = () => {
            if (xhr.status === 200) {
                return resolve(xhr.responseText);
            }
            else return reject("Request rejected")
        }
        xhr.send();
    });
    
    console.log(promise);
    promise
        .then((response) => {
            console.log(response);
            ul.innerHTML = response;
        })
        .catch((error) => {
            console.log(error)
            ul.innerHTML = error;
        })
        .finally(() => {
            btn.style.display = 'none'
        });
}



function add() {
    request();
}