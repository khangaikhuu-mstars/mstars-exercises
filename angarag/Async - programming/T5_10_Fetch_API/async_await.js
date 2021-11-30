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

// Дээрх Ajax функцын жишээ өгөгдсөн бөгөөд энэхүү функцыг
// 1. fetch функц рүү хөрвүүлнэ үү
fetch("pets.json").then((response) => response.json()).then((data) => {

  data.map((i) => {
    document.getElementById("fetch").innerHTML += `<h1>${i.name}</h1>`

  })
})





// 2. хэрвээ fetch функц рүү хөрвүүлсэн бол async/await ашиглан шинээр async функц шинээр тодорхойлоод fetch ашиглан pets.json аваад тэр утгаа буцаадаг болгоно уу

async function fetchData() {
  const response = await fetch("pets.json")
  const data = await response.json()
  return data
}



// 3. Дараа нь тухайн функцээ дуудан түүний үр дүн болон алдааг handle буюу боловсруулаад хамгийн сүүлд нь "It is done" гэсэн мессеж консоль дээр хэвлэнэ үү. async үргэлж Promise буцаадагийг санаарай


fetchData().then((i) => {
  i.map((u) => {
    document.getElementById('async').innerHTML += `<h2>${u.breed}</h2>`
  })
}).catch((error) => console.log("YOU FAILED")).finally((finale) => console.log("IT IS DONE"))