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


// fetch('pets.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     document.getElementById("fetch").innerHTML = "<h3>By Fetch</h3>"
//     data.forEach(element =>{
//       document.getElementById("fetch").innerHTML +="<ul>"
//       document.getElementById("fetch").innerHTML += `<li>${element.name}</li>`
//       document.getElementById("fetch").innerHTML += `<li>${element.type}</li>`
//       document.getElementById("fetch").innerHTML += `<li>${element.breed}</li>`
//       document.getElementById("fetch").innerHTML +="</ul>"
//     })
//   })
//   .catch(error =>{
//     document.getElementById("fetch").innerHTML = `<h3 style="color:red;">Fetch deer Aldaa garsaan catch bariad avsan</h3>`
//   })



// 2. хэрвээ fetch функц рүү хөрвүүлсэн бол async/await ашиглан шинээр async функц шинээр тодорхойлоод fetch ашиглан pets.json аваад тэр утгаа буцаадаг болгоно уу


async function asyncFetch(){
const a = await fetch("pets.json")
const response = await a.json()
//console.log(response)
return response

// response.forEach(element =>{
//         document.getElementById("fetch").innerHTML +="<ul>"
//         document.getElementById("fetch").innerHTML += `<li>${element.name}</li>`
//         document.getElementById("fetch").innerHTML += `<li>${element.type}</li>`
//         document.getElementById("fetch").innerHTML += `<li>${element.breed}</li>`
//         document.getElementById("fetch").innerHTML +="</ul>"
//       })


}



// 3. Дараа нь тухайн функцээ дуудан түүний үр дүн болон алдааг handle буюу боловсруулаад хамгийн сүүлд нь "It is done" гэсэн мессеж консоль дээр хэвлэнэ үү. async үргэлж Promise буцаадагийг санаарай

asyncFetch()
  .then((data) => console.log(data)).catch((error) => console.log(error));