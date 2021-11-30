var xhr = new XMLHttpRequest();
xhr.open('GET', 'pets.json');

xhr.onload = function() {
  if (xhr.status === 200) {
    document.getElementById("ajax").innerHTML = xhr.responseText;
  } else {
    document.getElementById("ajax").innerHTML = "Something went wrong";
  }
}

//xhr.send();
// өгөгдсөн нь дээрх AJAX функц. Үүнийг 
// 1. Promise лүү дээрхийг хөрвүүлэн хувиргаж үр дүнг нь элемент id ="promise" дээр хэвлэнэ үү.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу






// өгөгдсөн Ajax функцыг fetch лүү хөрвүүлэн үр дүнг нь элемент id="fetch" дээр хэвлэнэ үү.
// хэрвээ тусламж хэрэгтэй бол fetch_example.js файлнаас яаж fetch хэрэглэж байгааг харна уу.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу

fetch('pets.json')
  .then(response => response.json())
  .then((data) => {
    data.forEach(element =>{
      document.getElementById("ajax").innerHTML +="<ul>"
      document.getElementById("ajax").innerHTML += `<li>${element.name}</li>`
      document.getElementById("ajax").innerHTML += `<li>${element.type}</li>`
      document.getElementById("ajax").innerHTML += `<li>${element.breed}</li>`
      document.getElementById("ajax").innerHTML +="</ul>"
    })
  })
 





