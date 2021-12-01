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

// const promise = new Promise((resolve, reject) => {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'pets.json');

//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       return resolve(document.getElementById("ajax").innerHTML = xhr.responseText);
//     } else {
//       return reject(document.getElementById("ajax").innerHTML = "Something went wrong");
//     }
//   }

//   xhr.send();
// })




// өгөгдсөн Ajax функцыг fetch лүү хөрвүүлэн үр дүнг нь элемент id="fetch" дээр хэвлэнэ үү.
// хэрвээ тусламж хэрэгтэй бол fetch_example.js файлнаас яаж fetch хэрэглэж байгааг харна уу.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу

fetch("pets.json")
  .then(i => i.json())
  .then(u => {
    u.map(j => document.getElementById('fetch').innerHTML += j.name)
    console.log(u)
  })
  .catch(console.log('smt went wrong'));