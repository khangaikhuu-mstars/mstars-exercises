const xhr = new XMLHttpRequest()
const btn = document.getElementById('button')
const text = document.getElementById("ajax")
const myPromise = new Promise((resolve, reject) => {
    xhr.open("GET", "https://gorest.co.in/public/v1/users")
    btn.addEventListener("click", () => {
        xhr.onload = function () {
            if (xhr.status == 200) {
                return resolve(xhr.responseText);
            } else {
                return reject("didnt work mofo")
            }
        }
        xhr.send()
    })

})
myPromise.then((data) => {
    let profiles = JSON.parse(data);
    const dataObj = profiles.data;
    dataObj.map((obj) => {
        console.log(obj.name)
        text.innerHTML += `<li><h1>${obj.name}</h1><p>Email: ${obj.email}</p><p>Sex: ${obj.gender}</p><p>Status: ${obj.status}</p></li>`
    })

}).catch((error) => {
    text.innerHTML = error
}).finally(() => {
    btn.style.display = "none"
})
