// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'pets.json');

// xhr.onload = function () {
//   if (xhr.status === 200) {
//     document.getElementById("ajax").innerHTML = xhr.responseText;
//   } else {
//     document.getElementById("ajax").innerHTML = "Something went wrong";
//   }
// }

// xhr.send();
// өгөгдсөн нь дээрх AJAX функц. Үүнийг 
// 1. Promise лүү дээрхийг хөрвүүлэн хувиргаж үр дүнг нь элемент id ="promise" дээр хэвлэнэ үү.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу

var promise = new Promise(function (resolve, reject) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "pets.json");

  xhr.onload = function () {
    if (xhr.status === 200) {
      return resolve(xhr.responseText)
    } else {
      return reject('Failed')
    }
  }
  xhr.send();
});
console.log(promise);


promise.then((data) => {
  const jsonData = JSON.parse(data);
  console.log(jsonData)
  for (i = 0; i < jsonData.length; i++) {
    document.getElementById("promise").innerHTML += `
    <h2>Name: ${jsonData[i].name}</h2>
    <p>Type: ${jsonData[i].type}</p>
    <p>Breed: ${jsonData[i].breed}</p>`
  }
}).catch((error) => {
  console.log(error)
})





// өгөгдсөн Ajax функцыг fetch лүү хөрвүүлэн үр дүнг нь элемент id="fetch" дээр хэвлэнэ үү.
// хэрвээ тусламж хэрэгтэй бол fetch_example.js файлнаас яаж fetch хэрэглэж байгааг харна уу.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу

fetch('pets.json')
  .then(response => response.json())
  .then(data => {
    promise.then((data) => {
      const jsonData = JSON.parse(data);
      console.log(jsonData)
      for (i = 0; i < jsonData.length; i++) {
        document.getElementById("promise").innerHTML += `
        <h2>Name: ${jsonData[i].name}</h2>
        <p>Type: ${jsonData[i].type}</p>
        <p>Breed: ${jsonData[i].breed}</p>`
      }
    });
    console.log(data)
  })





