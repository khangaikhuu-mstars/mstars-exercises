// var xhr = new XMLHttpRequest();
// var hide = document.getElementById("button")

// xhr.onreadystatechange = function () {
//     console.log(xhr.status)
//     if (xhr.status === 200) {
//         console.log('"The Requist is OK"')
//         document.getElementById("ajax").innerHTML = `${xhr.responseText}  STATUS:${xhr.status} , "The Requist is OK`
//     }
// }
// xhr.open("GET", "sidebar.html")

// function sendAjax() {
//     xhr.send()
// }
// hide.addEventListener("click", () => {
//     hide.style.display = "none"
// })

const myPromise = new Promise(function (resolve, reject) {

    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "sidebar.html")
    xhr.onload = () => {
        if (xhr.status === 200) {
            return resolve(xhr.responseText)
        } else {
            return reject('Rejected')
        }
    }
    xhr.send()
});
var btn = document.getElementById("button")
myPromise
    .then((data) => document.getElementById("ajax").innerHTML = data)
    .catch((error) => document.getElementById("ajax").innerHTML = 'Not defined')
    .finally(() => {
        btn.addEventListener('click', () => {
            btn.style.display = 'none'
        })
    })