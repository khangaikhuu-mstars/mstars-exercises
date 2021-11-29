const myPromise = new Promise(function (resolve, reject) {

    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            return resolve(xhr.responseText)
        } else {
            return reject("It broke")
        }
    }
    xhr.open("GET", "https://gorest.co.in/public/v1/users");
    xhr.send();


})
console.log(myPromise);

myPromise.then((data) => {
    const dataJSON = JSON.parse(data);
    console.log(dataJSON)
    for (i = 0; i < dataJSON.data.length; i++) {
        console.log(dataJSON.data[i].name)
        console.log(dataJSON.data[i].gender)
        document.getElementById("ajax").innerHTML += `<li class="name">${dataJSON.data[i].name} </li>`
        document.getElementById("ajax").innerHTML += `<li class="gender">${dataJSON.data[i].gender}</li>`
        document.getElementById("ajax").innerHTML += `<li class="email">${dataJSON.data[i].email}</li>`

    }
})

