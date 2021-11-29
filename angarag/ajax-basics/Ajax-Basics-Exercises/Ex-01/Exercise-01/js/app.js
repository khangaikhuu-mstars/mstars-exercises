const xhr = new XMLHttpRequest()
const btn = document.getElementById("button")
const text = document.getElementById('ajax')
const myPromise = new Promise((resolve, reject) => {
    xhr.open("GET", "sidebar.html")
    btn.addEventListener("click", (event) => {
        xhr.onreadystatechange = function () {
            if (xhr.status == 200) {
                text.innerHTML = xhr.responseText
                resolve("Bolson")
            } else {
                reject("Boloogui")
            }
        }
        btn.style.display = "none"
        xhr.send()

    })
})
console.log(myPromise)