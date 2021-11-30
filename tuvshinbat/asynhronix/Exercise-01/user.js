const btn = document.querySelector("button")
let myPromise = new Promise((resolve, reject) => {


    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://gorest.co.in/public/v1/users")
    xhr.onload = function () {
        if (xhr.status === 200) {
            return resolve(xhr.responseText)
        } else {
            return reject("hud 2")
        }
    }
    xhr.send()
});
document.getElementById("button").addEventListener("click", () => {
    myPromise.then((data) => {
        let jParse = JSON.parse(data)
        console.log(data)
    
        let object = jParse.data
        console.log(object)
    
        for (i = 0; i < object.length; i++) {
            let name = object[i]
            console.log(name)
            document.getElementById("ajax").innerHTML += `<h1>${name.name}</h1>`;
            document.getElementById("ajax").innerHTML += `<p>${name.email}</p>`;
            document.getElementById("ajax").innerHTML += `<p>${name.gender}</p>`;
            document.getElementById("ajax").innerHTML += `<p>${name.status}</p>`;
        }
    });
});
