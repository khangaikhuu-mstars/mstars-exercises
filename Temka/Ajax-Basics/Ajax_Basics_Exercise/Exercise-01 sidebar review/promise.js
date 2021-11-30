
url = "https://gorest.co.in/public/v1/users"
users = document.getElementById("users")

let myPromise = new Promise(function(resolve, reject){

    let xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    
    xhr.onload = function(){
        if (xhr.status === 200){
            console.log(JSON.parse(xhr.responseText))
            return resolve(JSON.parse(xhr.responseText).data)
        }else {
            return reject("Rejected")
        }
    }
    xhr.send()
})



function generateHTML(listPerson){
    listPerson.map(person =>{
        const unorderedList  = document.createElement('ul')
        
        unorderedList.innerHTML = `
        <li><h2>${person.name}</h2></li>
        <li>ID: ${person.id}</li>
        <li>Gender: ${person.gender}</li>
        <li>Email: ${person.email}</li>
        <li>Status: ${person.status}</li>
        `
        users.appendChild(unorderedList)
    })
    
}

myPromise.then((data)=>{
    console.log(data)
    generateHTML(data)

})