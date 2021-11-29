
const promise = new Promise(function(resolve, reject) {

            let xhr = new XMLHttpRequest();
            xhr.open("GET", "sidebar.html");

            xhr.onload = function () {
                if (xhr.status === 200) {
                    return resolve(xhr.responseText);
                } else {
                    return reject('rejected');
                }
            }
                xhr.send();
});

let btn = document.getElementById("hide");
promise.then((data) => {
   console.log(data);
   btn.addEventListener("click", () => {
       document.getElementById("ajax").innerHTML = data;
   })
}).catch((error) => {
    document.getElementById("ajax").innerHTML = "Not defined";
}).finally(() => {
    btn.addEventListener("click", () => {
        btn.style.display = 'none';
    })
});
