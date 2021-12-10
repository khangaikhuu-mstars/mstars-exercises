var buttonHide = document.getElementById("button")
var ulHide = document.getElementById("ajax")

const promise = new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {

            return resolve(xhr.responseText)
        } else {
            console.log("Failed")
        }
    }
    xhr.open('GET', 'https://gorest.co.in/public/v1/users');
    xhr.send()
})

buttonHide.addEventListener('click', () => {
    promise.then((data) => {
            document.getElementById("ajax").innerHTML = ""
                var data = JSON.parse(data);
                const people = data.data;
                people.map(obj => {
                    document.getElementById("ajax").innerHTML += `<li id="li"><h2>${obj.name}</h2> <h3>${obj.email} | ${obj.gender}<h3> Status: ${obj.status}</li>`
                })
            })
            .catch((error) => console.log(error))
            .finally(() => {
                if(ulHide.style.display == 'none'){
                    ulHide.style.display = 'block'

                } else {
                    ulHide.style.display = 'none'
                }
            })
})