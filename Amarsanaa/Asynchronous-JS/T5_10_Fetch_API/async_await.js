// var xhr = new XMLHttpRequest();
// xhr.open("GET", "pets.json");

// xhr.onload = function () {
//   if (xhr.status === 200) {
//     document.getElementById("ajax").innerHTML = xhr.responseText;
//   } else {
//     document.getElementById("ajax").innerHTML = "Something went wrong";
//   }
// };

// xhr.send();

// Дээрх Ajax функцын жишээ өгөгдсөн бөгөөд энэхүү функцыг
// 1. fetch функц рүү хөрвүүлнэ үү

// fetch("pets.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.map((i) => {
//       document.getElementById(
//         "ajax"
//       ).innerHTML += `${i.type}, ${i.breed}, ${i.name}<br>`;
//     });
//   })
//   .catch((error) => {
//     document.getElementById("ajax").innerHTML = "Something went wrong";
//     console.log(error);
//   });

// 2. хэрвээ fetch функц рүү хөрвүүлсэн бол async/await ашиглан шинээр async функц шинээр тодорхойлоод fetch ашиглан pets.json аваад тэр утгаа буцаадаг болгоно уу
async function asyncFetch() {
  const a = await fetch("pets.json");
  const response = await a.json();
  return response;
}

// 3. Дараа нь тухайн функцээ дуудан түүний үр дүн болон алдааг handle буюу боловсруулаад хамгийн сүүлд нь "It is done" гэсэн мессеж консоль дээр хэвлэнэ үү. async үргэлж Promise буцаадагийг санаарай

asyncFetch()
  .then((data) => {
    data.map((i) => {
      document.getElementById(
        "ajax"
      ).innerHTML += `${i.type}, ${i.breed}, ${i.name}<br>`;
    });
    console.log("It is done");
  })
  .catch((error) => {
    document.getElementById("ajax").innerHTML = "Something went wrong";
    console.log(error);
  });
