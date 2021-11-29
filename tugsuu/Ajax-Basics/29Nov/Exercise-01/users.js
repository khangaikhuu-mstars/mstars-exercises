var button = document.getElementById("button")
var ul = document.getElementById("ajax")
const promise = new Promise(function (resolve, reject) {

    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://gorest.co.in/public/v1/users ")
    xhr.onload = () => {
        if (xhr.status === 200) {
            return resolve(xhr.responseText)
        } else {
            return reject("rejected")
        }
    }
    xhr.send()
})
var count = 0
button.addEventListener("click", () => {
    count++
    promise
        .then((data) => {
            document.getElementById("ajax").innerHTML = ""
            document.getElementById('count').innerHTML = `Та товч дээр ${count} удаа дарсан байна.`
            var response = JSON.parse(data)

            const json = response.data
            json.map(obj => {
                document.getElementById("ajax").innerHTML += `<li>
                <h1>Name: ${obj.name}</h1> 
                <h2>ID: ${obj.id}<h2>
                <h2>E-mail: ${obj.email}</h2> 
                <h2>Gender: ${obj.gender} </h2>
                <h3>Status: ${obj.status} </h3> 
                </li>`
            })
        })
        .catch((error) => document.getElementById("ajax").innerHTML = "Rejected")
        .finally(() => {
            if (ul.style.display === 'block') {
                ul.style.display = 'none'
                button.textContent = `Bring It! `
            } else {
                ul.style.display = 'block'
                button.textContent = `Hide it! `
            }
        })

})