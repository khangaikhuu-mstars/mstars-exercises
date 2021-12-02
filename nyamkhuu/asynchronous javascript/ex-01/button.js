// let xhttp = new XMLHttpRequest();


// xhttp.onload = function () {
//     console.log(xhttp.responseText)
//     document.getElementById('ajax').innerHTML = xhttp.responseText
// }
// xhttp.open("GET", "sidebar.html");

// function sendAJAX() {
//     xhttp.send();
// }
// document.getElementById("load").addEventListener('click', () => {
//     document.getElementById("load").style.display = 'none'
// })




const myPromise = new Promise(function (resolve, reject) {

    let sidebarhtml = new XMLHttpRequest();

    sidebarhtml.open("GET", "sidebar.html");

    sidebarhtml.onload = () => {
        if (sidebarhtml.status == 200) {
            return resolve(sidebarhtml.responseText)
        } else {
            return reject('error')
        }

    }
    sidebarhtml.send()

});

let btn = document.getElementById("load")

myPromise
.then((side) => {
    
    btn.addEventListener('click', ()=>{

        document.getElementById('ajax').innerHTML = side
    } )

})
.catch((error) => {console.log(error)})

.finally(()=>{ 
    btn.addEventListener('click', ()=>{

        btn.style.display = 'none'
    } )
})

