
const promise = new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "sidebar.html");

    xhr.onload = function () {
        if (xhr.status === 200) {
           return resolve(xhr.responseText);
        } else {
           return reject('Rejected');
        }
    }
    xhr.send();
}
);

console.log(promise);
promise
    .then((response) => {console.log(response);})
    .catch((error) => console.log(error))
    .finally(() => {btn.style.display = 'None'});


