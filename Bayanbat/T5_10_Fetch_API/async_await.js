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

// Дээрх Ajax функцын жишээ өгөгдсөн бөгөөд энэхүү функцыг
// 1. fetch функц рүү хөрвүүлнэ үү

// fetch("pets.json")
//   .then(i => i.json())
//   .then(u => {
//     u.map(j => console.log(j.name))
//   })
//   .catch(console.log('smt went wrong'));


// 2. хэрвээ fetch функц рүү хөрвүүлсэн бол async/await ашиглан шинээр async функц шинээр тодорхойлоод fetch ашиглан pets.json аваад тэр утгаа буцаадаг болгоно уу
// asyncs


// 3. Дараа нь тухайн функцээ дуудан түүний үр дүн болон алдааг handle буюу боловсруулаад хамгийн сүүлд нь "It is done" гэсэн мессеж консоль дээр хэвлэнэ үү. async үргэлж Promise буцаадагийг санаарай
async function goyFetchNer() {
  const i = await fetch("pets.json");
  const u = await i.json();
  return u;
};
goyFetchNer()
  .then(j => {
    j.map(d => console.log(d.name))
  })
  .catch(() => console.log("that's suck"))
  .finally(() => console.log("It is done"))