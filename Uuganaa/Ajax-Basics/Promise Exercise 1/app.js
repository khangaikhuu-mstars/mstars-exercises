// var xhr = new XMLHttpRequest;
// xhr.onreadystatechange = function () {
//     // console.log(xhr.status);
//     // console.log(xhr.readyState, "The Request Is Ok");
//     // console.log(xhr.responseText);
//     // document.getElementById("ajax").innerHTML = xhr.responseText
// }
// xhr.open("GET", "sidebar.html");

// function sendAjax() {
//     xhr.send()
//     document.getElementById("button").addEventListener("click", () => {
//         document.getElementById("button").style.display = 'none'
//     });
// }


const btn = document.getElementById("button")
const promise = new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest;

    xhr.onload = function () {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            return resolve(xhr.responseText)
        } else {
            return reject("reject")
        }
    }
    xhr.open("GET", "sidebar.html");


    xhr.send()

})
promise
    .then((response) => {
        document.getElementById("ajax").innerHTML = response
        console.log(response);
    })
    .catch((error) => {
        document.getElementById("ajax").innerHTML = error
    })
    .finally(() => {
        btn.style.display = "none"
    });