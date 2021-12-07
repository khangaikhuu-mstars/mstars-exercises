// // Ajax call for pets.json file
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'pets.json');

// xhr.onload = function () {
//     console.log(xhr.responseText);
// }

// xhr.send();


// // fetch API call for pets.json file
// fetch('pets.json')
//     .then(response => response.json())
//     .then(data => console.log(data));




// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'pets.json');

// xhr.onload = function () {
//     if (xhr.status === 200) {
//         document.getElementById("ajax").innerHTML = xhr.responseText;
//     } else {
//         document.getElementById("ajax").innerHTML = "Something went wrong";
//     }
// }

// xhr.send();
// өгөгдсөн нь дээрх AJAX функц. Үүнийг 
// 1. Promise лүү дээрхийг хөрвүүлэн хувиргаж үр дүнг нь элемент id ="promise" дээр хэвлэнэ үү.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу







// const myPromise = new Promise(function (resolve, reject) {

//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'pets.json');

//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             return resolve(xhr.responseText)

//         } else {
//             return reject("Something went wrong")

//         }
//     }

//     xhr.send();
// })
// myPromise.then((data) => {
//     const data1 = JSON.parse(data)
//     const data2 = data1
//     for (i = 0; i < data2.length; i++) {
//         document.getElementById("fetch").innerHTML += `<h2>My pet ${data2[i].name}, </h2>`
//         document.getElementById("fetch").innerHTML += `<p>My pet type ${data2[i].type}, </p>`
//     }
// }).catch((error) => {
//     document.getElementById("fetch").innerHTML = error
// })








// өгөгдсөн Ajax функцыг fetch лүү хөрвүүлэн үр дүнг нь элемент id="fetch" дээр хэвлэнэ үү.
// хэрвээ тусламж хэрэгтэй бол fetch_example.js файлнаас яаж fetch хэрэглэж байгааг харна уу.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу

// fetch('pets.json')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         data.forEach(element => {
//             document.getElementById("fetch").innerHTML += `<ul>`
//             document.getElementById("fetch").innerHTML += `<li>${element.name}</li>`
//             document.getElementById("fetch").innerHTML += `<li>${element.type}</li>`
//             document.getElementById("fetch").innerHTML += `<li>${element.breed}</li>`
//             document.getElementById('fetch').innerHTML += `</ul>`
//         })
//     });



fetch('pets.json')
    .then(response => response.json())
    .then(data => data.map((ob) => {
        document.getElementById("fetch").innerHTML += `<h2>${ob.name}</h2>`
        document.getElementById("fetch").innerHTML += `<p>${ob.type}</p>`

    }))