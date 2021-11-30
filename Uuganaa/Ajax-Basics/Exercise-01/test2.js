const btn = document.getElementById("load")
const promise = new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest;
    xhr.onload = function () {
        if (xhr.status === 200) {
            return resolve(xhr.responseText)
        } else {
            return reject("error")
        }

    }
    xhr.open("GET", "https://gorest.co.in/public/v1/users")
    xhr.send();

})
// console.log(promise)
btn.addEventListener("click", (event) => {


    promise.then((data) => {
        const data1 = JSON.parse(data)
        const data2 = data1.data
        for (i = 0; i < data2.length; i++) {
            document.getElementById("ajax").innerHTML += `<li>${data2[i].name}</li>`

        }
    }).catch((error) => {
        document.getElementById("ajax").innerHTML = error
    }).finally((event) => {
        btn.style.display = "none"
    })
})