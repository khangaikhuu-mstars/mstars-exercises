
// let xhr = new XMLHttpRequest();

// xhr.open("GET", "https://gorest.co.in/public/v1/users");
// xhr.onload = function () {
//     if (xhr.status === 200) {
//         console.log(xhr.responseText);
//     } 
// }
// xhr.send()

const promise = new Promise(function(resolve, reject) {

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://gorest.co.in/public/v1/users");
xhr.onload = function () {
    if (xhr.status === 200) {
        // console.log(xhr.responseText);
        let data = xhr.responseText;
        console.log(data);
        return resolve(data);
    } else {
        return reject("Rejected");
    }
}
xhr.send();
});

let btn = document.getElementById("hide");
let ul = document.getElementById("ajax");
btn.addEventListener("click", () => {
    promise.then((data) => {
        ul.innerHTML = '';
        const json = JSON.parse(data);
        let datas = json.data;
        // for(i = 0; i < datas.length; i++) {
        //     document.getElementById("ajax").innerHTML += `<h1>${datas[i].name}</h1>`;
        // }
        datas.map((data) => {
                document.getElementById("ajax").innerHTML += `<ul><li> <h2>Name: </h2> <h1>${data.name}</h1></li>
                                                              <li><h2>Email: </h2> <p>${data.email}</p></li>
                                                              <li><h2>Gender: </h2> <p>${data.gender}</p></li>
                                                              <li><h2>Status: </h2> <p>${data.status}</p></li></ul>`;
       
        })
    }).catch((error) => {
        document.getElementById("ajax").innerHTML = "Error";
    }).finally(() => {
        if (ul.style.display === 'block') {
            ul.style.display = 'none';
            btn.textContent = "Show Information"
        } else {
            ul.style.display = 'block';
            btn.textContent = "Hide Information"
        }
});  
});