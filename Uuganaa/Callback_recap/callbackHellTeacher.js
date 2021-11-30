// Callback гэдэг нь event loop нь queue дотор байгаа зүйлсийг ажиллуулах буюу дуудах үе юм.
// Энэ нь Javascript Engine нь хэрвээ энэ функц ажлаа хийж дуусвал дараа нь энийг дууд гэсэн утгатай юм
// Энэ нь async функцыг дуудахад ашиглахад хэрэглэдэг бөгөөд үүнийг хэрэглэснээрээ тухайн функц нь эмх замбараагүй дуудагдахаас үр дүнгээ эмх замбараагүй гаргахыг хянан зохицуулж байгаа юм.

// function printAfter3Seconds() {
//   console.log('after 3 seconds I was called');
// }

// setTimeout(printAfter3Seconds, 3000);

// function sum(val1, val2, callback) {
//   var sum = val1 + val2;
//   if (callback) {
//     callback(sum)
//   }
// }

// function myCallback(response) {
//   console.log('Sum result:', response);
// }

// sum(5, 6, myCallback);




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
  console.log("2...")

}

function countOne() {
  console.log('1...')

}

function DONE() {
  console.log('done')
}
PromisifyingTimeout(countSix, 1000).then(function () {
  return PromisifyingTimeout(countFive, 1000).then(function () {
    return PromisifyingTimeout(countFour, 1000).then(function () {
      return PromisifyingTimeout(countThree, 1000).then(function () {
        return PromisifyingTimeout(countTwo, 1000).then(function () {
          return PromisifyingTimeout(countOne, 1000).catch((error) => {
            return PromisifyingTimeout(error, 1000)
          }).finally(function () {
            return PromisifyingTimeout(DONE, 1000)
          })
        })
      })
    })
  })
});