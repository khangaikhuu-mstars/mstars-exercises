const promise = new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            return resolve(xhr.responseText);
        } else {
            return reject("Rejected");
        }
    }

    xhr.open('GET', 'https://gorest.co.in/public/v1/users');
    xhr.send();

});
console.log(promise);

let btn = document.getElementById("button")
btn.addEventListener('click', () => {
    promise.then((data) => {
        const jsonData = JSON.parse(data);
        console.log(jsonData)
        let people = jsonData.data;
        for (i = 0; i < people.length; i++) {
            document.getElementById("ajax").innerHTML += `
            <h2>Name: ${people[i].name}</h2>
            <p>Email: ${people[i].email}</p>
            <p>Gender: ${people[i].gender}</p>`
        }
    })
    btn.style.display = 'none';
})

// console.log(dataNames);
// for( i = 0; i < dataNames.data.length; i++ ) {
//     console.log(dataNames.data[i].name);
//     document.getElementById("ajax").innerHTML += `<li>${dataNames.data[i].name}, ${dataEmails.data[i].email}, ${dataGenders.data[i].gender}</li>`;
// }

// const dataEmails = JSON.parse(data);
// for( i = 0; i < dataEmails.data.length; i++ ) {
//     console.log(dataEmails.data[i].email);
//     document.getElementById("ajax").innerHTML += `<li>${dataEmails.data[i].email}</li>`
// }

// const dataGenders = JSON.parse(data);
// for( i = 0; i < dataGenders.data.length; i++ ) {
//     console.log(dataGenders.data[i].gender);
// }
// }).catch((error) => {
//     document.getElementById("ajax").innerHTML = 'Not found';
// }).finally(() => {
//     let btn = document.getElementById("button");
//     btn.style.display = 'none';
// });



