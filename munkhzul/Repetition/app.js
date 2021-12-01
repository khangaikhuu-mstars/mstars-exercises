const btn = document.getElementsByClassName("button")[0];

btn.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        console.log(xhr.status);
        console.log(xhr.responseText);
        let data = JSON.parse(xhr.responseText);
    
        let pets = data.data;
        // for(i = 0; i < pets.length; i++) {
        //     document.getElementById("pets").innerHTML += `<li> ${pets[i].nud} </li>`;
        // }
        pets.map((pet) => {
            document.getElementById("pets").innerHTML += `<li> ${pet.nud} </li>`;
        })
    }
    xhr.open('GET', 'pets.json');
    xhr.send();
})

const myPromise = new Promise((resolve, reject) => {
    
    if() {
        resolve("Promise was fulfilled");
    } else {
        reject("Promise was rejected");
    }
}).then(result => {

}).catch(error => {

});