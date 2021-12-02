// Өгөгдсөн нь доорх nested callback setTimeout функцүүд болно.
// Үүнийг callback hell гэж нэрлэж болох бөгөөд энэ давхарлан дуудсан
// функцүүд яг юу хийгээд байгааг мэдэхэд их төвөгтэй болно. 
// Үүнийг ойлгомжтой болгохын тулд доорх даалгавруудыг хийнэ үү


setTimeout(function() {
  console.log('6...')
  setTimeout(function() {
    console.log('5...')
    setTimeout(function() {
      console.log('4...')
      setTimeout(function() {
          console.log('3...')
          setTimeout(function() {
            console.log('2...')
            setTimeout(function() {
              console.log('1...')
              setTimeout(function() {
                console.log('DONE!')
              }, 1000)
            }, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 0);


// setTimeout(function() {
//   console.log('3...')
//   setTimeout(function() {
//     console.log('2...')
//     setTimeout(function() {
//       console.log('1...')
//       setTimeout(function() {
//         console.log('DONE!')
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 0);



// Даалгавар 1
// Энэхүү функцүүдийг хооронд нь ингэж давхардуулахгүйгээр 
// setTimeout функц болгоныг нь тусад нь функц болгоод 
// тэгээд callback функцээр дуудан харуулна уу.
// жишээ нь

const promise = new Promise((resolve, reject) => {
  if(typeof xxxxx !== 'undefined') {
    return resolve(countThree);
  }
  else return reject('countThree function does not exist')
})

function countThree() {
  console.log('3...');
  setTimeout(countTwo, 1000);
}

function countTwo() {
  console.log('2...');
  setTimeout(countOne, 1000);
}

function countOne() {
  console.log('1...');
  setTimeout(printDone, 1000);
}

function printDone(){
  console.log('Done!');
  countThree();
}

console.log(promise)

promise.then(response => {
  response;
})
.catch(response => {
  console.log(response);
})
.finally(() => {
  printDone();
});


// гэх мэтээр үргэлжлүүлэн бичнэ үү.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу.
