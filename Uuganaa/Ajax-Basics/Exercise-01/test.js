const btn = document.getElementById("load")
const test = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest;
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
btn.addEventListener("click", (event) => {
    test.then((data) => {
        // console.log(data)
        const dataJson = JSON.parse(data)
        // console.log(dataJson)
        var dataJS = dataJson.data
        // console.log(dataJS)
        // var metaJs = dataJson.meta
        // console.log(metaJs)
        for (i = 0; i < dataJS.length; i++) {
            document.getElementById("ajax").innerHTML += `<h2><li>${dataJS[i].name},</li></h2> `
            document.getElementById("ajax").innerHTML += `<p></h3><li>${dataJS[i].email},</li></p> `
        }

    }).catch((error) => {
        document.getElementById("ajax").innerHTML = error
    }).finally((event) => {
        btn.style.display = "none"
    })
})