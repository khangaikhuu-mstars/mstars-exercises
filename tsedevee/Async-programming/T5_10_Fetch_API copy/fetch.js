const promise = new Promise(function (resolve, reject) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'pets.json');

  xhr.onload = function (){
    if (xhr.status === 200) {
        return resolve(xhr.responseText);
    } else {
        return reject ('rejected');
    }
}
xhr.send();
})


// өгөгдсөн нь дээрх AJAX функц. Үүнийг 
// 1. Promise лүү дээрхийг хөрвүүлэн хувиргаж үр дүнг нь элемент id ="promise" дээр хэвлэнэ үү.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу


promise
  .then((response) => {
    document.getElementById("promise").innerHTML = response
  })
  .catch((error) => {
    document.getElementById("promise").innerHTML =  error
  })



// өгөгдсөн Ajax функцыг fetch лүү хөрвүүлэн үр дүнг нь элемент id="fetch" дээр хэвлэнэ үү.
// хэрвээ тусламж хэрэгтэй бол fetch_example.js файлнаас яаж fetch хэрэглэж байгааг харна уу.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу








