const btn = document.getElementById('button')
const promise = new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', "https://gorest.co.in/public/v1/users");
    xhr.onload = () => {
        if (xhr.status === 200) {
            return resolve(JSON.parse(xhr.responseText));
        } else {
            return reject("u suck")
        }
    }
    xhr.send();
})
promise
    .then((i) => {
        const dataObj = i.data;
        dataObj.map((obj) => {
            document.getElementById("ajax").innerHTML += `<li>
            <h1>${obj.name}</h1>
            <h2>${obj.email}</h2>
            <h3>${obj.gender}</h3>
            <h4>${obj.status}</h4>
            </li>`
        })

    })
    .catch((u) => {
        document.getElementById("ajax").innerHTML = u
    })
    .finally(() => {
        btn.style.display = "none"
    })