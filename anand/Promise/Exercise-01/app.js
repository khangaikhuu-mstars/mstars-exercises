const btn = document.getElementById('button')
const myPromise = new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '/sidebar.html')
    xhr.onload = function () {
        if (xhr.status == 200) {
            return resolve(xhr.responseText)
        } else {
            return reject('Rejected')
        }
    }
    xhr.send()
})

console.log(myPromise)
myPromise.then((data) => {
    document.getElementById('ajax').innerHTML = data
}).catch((error) => document.getElementById('ajax').innerHTML = error).finally(() => {
    btn.style.display = `None`
})