var xhr = new XMLHttpRequest();
xhr.open("GET", "pets.json");

xhr.onload = function () {
  if (xhr.status === 200) {
    document.getElementById("ajax").innerHTML = xhr.responseText;
  } else {
    document.getElementById("ajax").innerHTML = "Something went wrong";
  }
};

xhr.send();
// өгөгдсөн нь дээрх AJAX функц. Үүнийг
// 1. Promise лүү дээрхийг хөрвүүлэн хувиргаж үр дүнг нь элемент id ="promise" дээр хэвлэнэ үү.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу

const promise = new Promise(function (resolve, reject) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "pets.json");
  xhr.onload = () => {
    if (xhr.status === 200) {
      return resolve(xhr.responseText);
    } else {
      return reject("Something went wrong.");
    }
  };
  xhr.send();
});

promise.then((data) => {
  document.getElementById("promise").innerHTML = data;
});

// өгөгдсөн Ajax функцыг fetch лүү хөрвүүлэн үр дүнг нь элемент id="fetch" дээр хэвлэнэ үү.
// хэрвээ тусламж хэрэгтэй бол fetch_example.js файлнаас яаж fetch хэрэглэж байгааг харна уу.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу

fetch("pets.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      document.getElementById("fetch").innerHTML = data[i].name;
    }
  });
