// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'pets.json');

// xhr.onload = function() {
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

const myPromise = new Promise((resolve, reject) => {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "pets.json");

  xhr.onload = function () {
    if (xhr.status === 200) {
      return resolve(xhr.responseText);
    } else {
      return reject("Something went wrong");
    }
  };

  xhr.send();
});

// myPromise.then((data) => {
//   console.log(data);
//   const dataArray = JSON.parse(data);
//   console.log(dataArray);
//   dataArray.map((i) =>{
//     console.log([i.name])
//     document.getElementById('promise').innerHTML += `<h2> ${i.name}</h2>
//                                                     <h3>  ${i.type}</h3>
//                                                     <h4>  ${i.breed}</h4>`
//   });
//   })

// өгөгдсөн Ajax функцыг fetch лүү хөрвүүлэн үр дүнг нь элемент id="fetch" дээр хэвлэнэ үү.
// хэрвээ тусламж хэрэгтэй бол fetch_example.js файлнаас яаж fetch хэрэглэж байгааг харна уу.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу

fetch("pets.json")
  .then((response) => response.json())
  .then((data) => {
    data.map(
      (l) =>
        (document.getElementById("fetch").innerHTML = `<h2> ${l.name}</h2>
  <h3>  ${l.type}</h3>
  <h4>${l.breed}</h4>`)
    );
  });
