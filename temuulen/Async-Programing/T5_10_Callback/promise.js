// Доорх Promise функц өгөгдсөн бөгөөд
// үүнийг ашиглан callback_hell.js дээрх давхардсан setTimeout
// функцыг хувирган бичнэ үү.
//
function PromisifyingTimeout(fn, time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      try {
        resolve(fn())
      } catch (e) {
        reject(e)
      }
    }, time)
  })
}

function countSix() {
  console.log('6...');
}

function countFive() {
  console.log('5...');
}

function countFour() {
  console.log('4...');
}

function countThree() {
  console.log('3...');
}

function countTwo() {
  console.log('2...');
}

function countOne() {
  console.log('1...');
}

function done() {
  console.log('DONE!')
}
// гэх мэтээр үргэлжлүүлэн бусад хэрэгтэй функцүүдийг бичнэ үү

// Даалгаврыг эндээс эхлэн хийнэ үү

PromisifyingTimeout(countSix, 1000) 
  .then(function () {
    return PromisifyingTimeout(countFive, 1000)
  }).catch((error) => {
    return reject('Failed')
  }).then(function () {
    return PromisifyingTimeout(countFour, 1000)
  }).catch((error) => {
    return reject('Failed')
  }).then(function () {
    return PromisifyingTimeout(countThree, 1000)
  }).catch((error) => {
    return reject('Failed')
  }).then(function () {
    return PromisifyingTimeout(countTwo, 1000)
  }).catch((error) => {
    return reject('Failed')
  }).then(function () {
    return PromisifyingTimeout(countOne, 1000)
  }).catch((error) => {
    return reject('Failed')
  }).finally(function () {
    return PromisifyingTimeout(done())
  })
