var hide = document.getElementById('button')

const myPromise = new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            return resolve(xhr.responseText);
        } else {
            return reject('rejected');
        }
    }
    xhr.open('GET', 'sidebar.html');
    xhr.send();
});
console.log(myPromise);
hide.addEventListener('click', ()=>{
    myPromise
       .then((response) => { document.getElementById('ajax').innerHTML = response;})
       .catch((error)=>  document.getElementById('ajax').innerHTML = "Page is not find")
       .finally(()=>{hide.style.display = 'none'})

})