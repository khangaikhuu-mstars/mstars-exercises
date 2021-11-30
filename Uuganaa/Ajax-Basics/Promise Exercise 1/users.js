const btn = document.getElementById("button")
const myPromise = new Promise(function (resolve, reject) {

    var xhr = new XMLHttpRequest;
    xhr.onload = function () {
        if (xhr.status === 200) {
            return resolve(xhr.responseText)
        } else {
            return reject("reject")
        }

    }
    xhr.open("GET", "https://gorest.co.in/public/v1/users");

    xhr.send()
})

btn.addEventListener("click", (event) => {
    myPromise.then((data) => {
        const dataJs = JSON.parse(data);
        var dataArray = dataJs.data

        for (i = 0; i < dataArray.length; i++) {
            console.log(dataArray[i])
            document.getElementById("ajax").innerHTML += `<li>${dataArray[i].name}</li>`
        }
    }).catch((error) => {
        document.getElementById("ajax").innerHTML = error
    }).finally((event) => {
        btn.style.display = "none"
    })
})
//             document.getElementById("ajax").innerHTML = response
//         console.log(response);
//     })
// .catch((error) => {
//     document.getElementById("ajax").innerHTML = error
// })