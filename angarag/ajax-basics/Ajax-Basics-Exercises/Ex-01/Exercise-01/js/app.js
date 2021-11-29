const xhr = new XMLHttpRequest()
const btn = document.getElementById("button")
const text = document.getElementById('ajax')
const myPromise = new Promise((resolve, reject) => {
    btn.addEventListener("click", ()=>{
        xhr.open("GET", "sidebar.html")
        xhr.onload = function () {
            if (xhr.status == 200) {
                return resolve(xhr.responseText)
            } else {
                return reject("Page not found 404")
            }
        }
        xhr.send()

    })
})
myPromise.then((data) => {
    text.innerHTML = data
}).catch((error) => document.getElementById("notFound").innerHTML = error).finally(()=>btn.style.display = "none")
